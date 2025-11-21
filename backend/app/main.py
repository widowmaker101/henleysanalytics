import os, sys
sys.path.insert(0, os.path.dirname(__file__))
try: import numpy_shim
except: pass
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.prophet import router as prophet_router
from app.routers.xgboost import router as xgboost_router
app.include_router(xgboost_router)


app = FastAPI(title="HenleysAnalytics")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
app.include_router(prophet_router)

@app.get("/")
def home(): return {"message": "HenleysAnalytics API – Live"}
