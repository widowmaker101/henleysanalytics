import os
from fastapi import APIRouter, File, UploadFile, HTTPException
import pandas as pd
import requests

router = APIRouter(prefix="/llama", tags=["Llama-3"])

GROQ_KEY = os.getenv("GROQ_KEY")
if not GROQ_KEY:
    @router.post("/insights")
    async def insights(file: UploadFile):
        raise HTTPException(status_code=500, detail="GROQ_KEY not set — add it on Render Environment Variables")

HEADERS = {
    "Authorization": f"Bearer {GROQ_KEY}",
    "Content-Type": "application/json"  # Fix: Groq requires this for POST
}
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

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
            "max_tokens": 500
        }

        resp = requests.post(GROQ_URL, json=payload, headers=HEADERS, timeout=60)
        resp.raise_for_status()
        return {"insights": resp.json()["choices"][0]["message"]["content"]}
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=500, detail=f"Groq API error: {e.response.text if e.response else str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing data: {str(e)}")
