@echo off
setlocal

set "PORT=4174"
set "ROOT=%~dp0"
set "ROOT=%ROOT:~0,-1%"

:: 프로젝트 루트로 이동
cd /d "%ROOT%"

if not exist "index.html" (
  echo [ERROR] index.html not found.
  echo Current directory: %ROOT%
  pause
  exit /b 1
)

echo.
echo =====================================
echo PangChu Privacy - Local Preview
if exist "%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" (
  echo Stopping existing service on port %PORT% ...
  powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }" >nul 2>&1
) else (
  for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do taskkill /F /PID %%P >nul 2>&1
)

echo.
echo Open: http://127.0.0.1:%PORT%/index.html
echo.
start "" "http://127.0.0.1:%PORT%/index.html"

if not exist "py" (
  where py >nul 2>nul
  if errorlevel 1 (
    echo [ERROR] Python launcher 'py' not found. Install Python and retry.
    pause
    exit /b 1
  )
)

py -m http.server %PORT% --bind 127.0.0.1 --directory "%ROOT%"

pause
