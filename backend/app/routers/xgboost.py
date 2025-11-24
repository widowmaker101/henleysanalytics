from fastapi import APIRouter, File, UploadFile
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error
import numpy as np

router = APIRouter(prefix="/xgboost", tags=["XGBoost"])

def clean_data(df):
    df = df.dropna()  # Remove rows with NaN
    X = df.iloc[:, :-1].select_dtypes(include=[np.number])  # Only numeric features
    y = df.iloc[:, -1]
    if y.dtype == "object":
        y = y.astype("category").cat.codes  # Convert text labels to numbers
    return X, y

@router.post("/classify")
async def classify(file: UploadFile):
    df = pd.read_csv(file.file)
    X, y = clean_data(df)
    if len(X) == 0 or len(y.unique()) < 2:
        return {"error": "Not enough clean data or only one class found. Try a clean CSV."}
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = xgb.XGBClassifier()
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    acc = accuracy_score(y_test, pred)
    return {"accuracy": round(float(acc), 4), "predictions": pred.tolist()[:10]}

@router.post("/regress")
async def regress(file: UploadFile):
    df = pd.read_csv(file.file)
    X, y = clean_data(df)
    if len(X) == 0:
        return {"error": "Not enough numeric data for regression."}
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = xgb.XGBRegressor()
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    mse = mean_squared_error(y_test, pred)
    return {"mse": round(float(mse), 4), "predictions": pred.tolist()[:10]}
