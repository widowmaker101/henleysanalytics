#!/bin/bash
set -e

echo "Upgrading pip..."
python -m pip install --upgrade pip setuptools wheel --no-cache-dir

echo "Installing with binary wheels only..."
pip install --only-binary=all -r requirements.txt


echo "import numpy as np; np.float_ = np.float64; np.int_ = np.int64" > numpy_shim.py
echo "NumPy shim created at $(pwd)/numpy_shim.py"
