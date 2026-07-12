@echo off
echo.
echo ===============================================
echo    ANTI-KUDDUS PROTOCOL - Local Server
echo ===============================================
echo.

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

:: Build if dist folder doesn't exist
if not exist "dist" (
    echo Building project...
    call npm run build
    echo.
)

:: Start the server
echo Starting local server on http://localhost:3000
echo Press Ctrl+C to stop.
echo.
call npx serve dist -l 3000
