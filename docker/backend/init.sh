#!/bin/bash
set -e
echo "Running backend init"
gunicorn -w 2 -b 0.0.0.0:5000 --chdir /workspace/MLVis_Template/backend App:app

