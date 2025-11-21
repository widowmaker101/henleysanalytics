#!/bin/bash
python -m pip install --upgrade pip==24.2 setuptools==70.3.0 wheel --no-cache-dir

pip install --only-binary=all -r requirements.txt
