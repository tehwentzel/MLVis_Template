#!/bin/bash
cd /workspace/MLVis_Template/frontend
npm install
npm install -g serve
npm run build
serve -s build -p 8000 --cors
