@echo off
cd "C:\Users\RD JUNIOR\Desktop\GESTÃO SHARKS COMPANY\2- SHARKS COMPANY\DEV\ORÇAMENTO ESTRATEGICO"
start /B npm run dev > server.log 2>&1
timeout /t 8 /nobreak > nul
start http://localhost:8080