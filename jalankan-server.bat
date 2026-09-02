@echo off
title CV Maker - Local Server
echo ========================================================
echo          MENJALANKAN LOCAL SERVER CV MAKER
echo ========================================================
echo.
echo Server lokal sedang berjalan di: http://localhost:8000
echo Membuka aplikasi di browser...
echo.
start http://localhost:8000
python -m http.server 8000
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Menjalankan alternatif menggunakan npx serve...
    npx serve -p 8000 .
)
pause
