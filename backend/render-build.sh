#!/bin/bash
set -e

echo "Upgrading pip..."
python -m pip install --upgrade pip==24.2 setuptools==70.3.0 wheel --no-cache-dir

echo "Installing dependencies with binary wheels only..."
pip install --only-binary=all -r requirements.txt

echo "Adding NumPy 2.0 compatibility shim..."
echo "import numpy as np; np.float_ = np.float64; np.int_ = np.int64" > /app/numpy_shim.py
