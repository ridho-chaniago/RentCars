@echo off
git add . && git commit -m "auto deploy" && git push origin main && npm run build && firebase deploy