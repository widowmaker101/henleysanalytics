from fastapi import APIRouter, File, UploadFile
import pandas as pd
from prophet import Prophet
import io

router = APIRouter(prefix="/prophet", tags=["Prophet"])

@router.post("/forecast")
async def forecast(file: UploadFile, periods: int = 90):
    df = pd.read_csv(io.StringIO((await file.read()).decode()))
    if 'ds' not in df or 'y' not in df: return {"error": "Need ds and y columns"}
    df['ds'] = pd.to_datetime(df['ds'])
    m = Prophet(yearly_seasonality=True, weekly_seasonality=True, daily_seasonality=True)
    m.fit(df)
    future = m.make_future_dataframe(periods=periods)
    forecast = m.predict(future)
    return {"forecast": forecast[['ds','yhat','yhat_lower','yhat_upper']].tail(periods).to_dict(orient='records')}
