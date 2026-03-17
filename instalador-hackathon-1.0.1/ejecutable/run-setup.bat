@echo off
setlocal
chcp 65001 >nul

:: Relaunch as administrator if needed
net session >nul 2>&1
if %errorLevel% neq 0 (
  echo Solicitando permisos de administrador...
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
  exit /b
)

set SCRIPT_PATH=%~dp0setup-hackathon.ps1
if not exist "%SCRIPT_PATH%" (
  echo No se encontro setup-hackathon.ps1 en la misma carpeta.
  pause
  exit /b 1
)

echo Ejecutando instalacion base para hackathon...
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_PATH%"

if %errorLevel% neq 0 (
  echo.
  echo La instalacion finalizo con errores.
) else (
  echo.
  echo Instalacion completada correctamente.
)

pause
