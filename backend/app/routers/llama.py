import os
from fastapi import APIRouter, File, UploadFile
import pandas as pd
import requests

router = APIRouter(prefix="/llama", tags=["Llama-3"])

GROQ_KEY = os.getenv("GROQ_KEY")
if not GROQ_KEY:
    raise RuntimeError("Please add GROQ_KEY in Render → Environment Variables")

HEADERS = {"Authorization": f"Bearer {GROQ_KEY}"}
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

@router.post("/insights")
async def insights(file: UploadFile):
    df = pd.read_csv(file.file)
    sample = df.head(8).to_csv(index=False)
    prompt = f"You are a senior data analyst. Here's a CSV sample:\n\n{sample}\n\nGive 3 short bullet-point insights and 1 actionable recommendation."

    resp = requests.post(GROQ_URL, json={
        "model": "llama3-70b-8192",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.3,
        "max_tokens": 500
    }, headers=HEADERS, timeout=60)

    resp.raise_for_status()
    return {"insights": resp.json()["choices"][0]["message"]["content"]}
