from fastapi import APIRouter, File, UploadFile
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error
import json

router = APIRouter(prefix="/xgboost", tags=["XGBoost"])

@router.post("/classify")
async def classify(file: UploadFile):
    df = pd.read_csv(file.file)
    X = df.drop(df.columns[-1], axis=1)
    y = df.iloc[:, -1]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    model = xgb.XGBClassifier()
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    acc = accuracy_score(y_test, pred)
    return {"accuracy": float(acc), "predictions": pred.tolist()[:10]}

@router.post("/regress")
async def regress(file: UploadFile):
    df = pd.read_csv(file.file)
    X = df.drop(df.columns[-1], axis=1)
    y = df.iloc[:, -1]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    model = xgb.XGBRegressor()
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    mse = mean_squared_error(y_test, pred)
    return {"mse": float(mse), "predictions": pred.tolist()[:10]}
