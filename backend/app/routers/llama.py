import os
from fastapi import APIRouter, File, UploadFile, HTTPException
import pandas as pd
import requests
import json

router = APIRouter(prefix="/llama", tags=["Llama-3"])

GROQ_KEY = os.getenv("GROQ_KEY")
if not GROQ_KEY:
    @router.post("/insights")
    async def insights(file: UploadFile):
        raise HTTPException(status_code=500, detail="GROQ_KEY not set — add it on Render Environment Variables")

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
HEADERS = {
    "Authorization": f"Bearer {GROQ_KEY}",
    "Content-Type": "application/json"
}

@router.post("/insights")
async def insights(file: UploadFile):
    try:
        df = pd.read_csv(file.file)
        sample = df.head(8).to_csv(index=False)
        prompt = f"You are a senior data analyst. Here's a CSV sample:\n\n{sample}\n\nGive 3 short bullet-point insights and 1 actionable recommendation."

        payload = {
            "model": "llama3-70b-8192",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.3,
            "max_tokens": 300  # Reduced to avoid free tier limits
        }

        print(f"Request payload: {json.dumps(payload, indent=2)}")  # Debug log
        print(f"Headers: {HEADERS}")  # Debug log

        resp = requests.post(GROQ_URL, json=payload, headers=HEADERS, timeout=60)
        resp.raise_for_status()
        
        response_data = resp.json()
        print(f"Groq response status: {resp.status_code}")  # Debug log
        
        return {"insights": response_data["choices"][0]["message"]["content"]}
    except requests.exceptions.HTTPError as e:
        error_detail = e.response.text if e.response else str(e)
        print(f"Groq HTTP error: {error_detail}")  # Debug log
        raise HTTPException(status_code=500, detail=f"Groq API error: {error_detail}")
    except Exception as e:
        print(f"Unexpected error: {str(e)}")  # Debug log
        raise HTTPException(status_code=500, detail=f"Error processing data: {str(e)}")
