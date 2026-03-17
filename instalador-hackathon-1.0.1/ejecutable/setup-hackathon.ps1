param(
  [switch]$SkipPython,
  [switch]$SkipGit,
  [switch]$SkipNode,
  [switch]$SkipPnpm,
  [switch]$SkipSsh,
  [string]$LogPath
)

$ErrorActionPreference = 'Stop'
$script:LogFilePath = $null
$script:TranscriptFilePath = $null
$script:TranscriptStarted = $false
$script:PackageManager = $null

function Write-LogLine {
  param([string]$Message)
  if (-not $script:LogFilePath) {
    return
  }

  try {
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Add-Content -Path $script:LogFilePath -Value "[$timestamp] $Message" -ErrorAction Stop
  }
  catch {
  }
}

function Initialize-Logging {
  if ([string]::IsNullOrWhiteSpace($LogPath)) {
    $logsDir = Join-Path $PSScriptRoot 'logs'
    if (-not (Test-Path $logsDir)) {
      New-Item -ItemType Directory -Path $logsDir | Out-Null
    }
    $script:LogFilePath = Join-Path $logsDir ("setup-{0}.log" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
  } else {
    $targetDir = Split-Path -Parent $LogPath
    if (-not [string]::IsNullOrWhiteSpace($targetDir) -and -not (Test-Path $targetDir)) {
      New-Item -ItemType Directory -Path $targetDir | Out-Null
    }
    $script:LogFilePath = $LogPath
  }

  New-Item -ItemType File -Path $script:LogFilePath -Force | Out-Null

  $logDir = Split-Path -Parent $script:LogFilePath
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($script:LogFilePath)
  $script:TranscriptFilePath = Join-Path $logDir ("{0}.transcript.log" -f $baseName)
  New-Item -ItemType File -Path $script:TranscriptFilePath -Force | Out-Null

  Write-LogLine 'Inicio de setup.'

  try {
    Start-Transcript -Path $script:TranscriptFilePath -Append | Out-Null
    $script:TranscriptStarted = $true
  }
  catch {
    Write-LogLine 'No se pudo iniciar transcript. Se usará solo log manual.'
  }
}

function Finalize-Logging {
  Write-LogLine 'Fin de setup.'
  if ($script:TranscriptStarted) {
    try {
      Stop-Transcript | Out-Null
    }
    catch {
      Write-LogLine 'No se pudo cerrar transcript correctamente.'
    }
  }
}

function Write-Step {
  param([string]$Message)
  Write-LogLine "STEP $Message"
  Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Write-Ok {
  param([string]$Message)
  Write-LogLine "OK $Message"
  Write-Host "[OK] $Message" -ForegroundColor Green
}

function Write-Warn {
  param([string]$Message)
  Write-LogLine "WARN $Message"
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Info {
  param([string]$Message)
  Write-LogLine "INFO $Message"
  Write-Host "[INFO] $Message" -ForegroundColor Gray
}

function Test-Command {
  param([string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

function Require-Admin {
  $currentIdentity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = New-Object Security.Principal.WindowsPrincipal($currentIdentity)
  if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw 'Este script debe ejecutarse como Administrador. Cierra y vuelve a abrir con clic derecho > Ejecutar como administrador.'
  }
}

function Install-Chocolatey {
  Write-Step 'Instalando Chocolatey (fallback por ausencia de winget)'
  Set-ExecutionPolicy Bypass -Scope Process -Force
  [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
  Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

  $env:Path = "$env:Path;C:\ProgramData\chocolatey\bin"
  Refresh-Path

  if (-not (Test-Command 'choco')) {
    throw @"
No se pudo instalar Chocolatey automáticamente.

Opciones:
1) Instalar/actualizar "App Installer" para habilitar winget.
2) Instalar Chocolatey manualmente desde https://chocolatey.org/install.
3) Reintentar este script.
"@
  }

  Write-Ok 'Chocolatey instalado correctamente.'
}

function Test-WingetHealthy {
  try {
    $null = (& winget source list 2>&1 | Out-String)
    return ($LASTEXITCODE -eq 0)
  }
  catch {
    return $false
  }
}

function Repair-WingetSources {
  Write-Step 'Reparando fuentes de winget'

  $resetOutput = (& winget source reset --force 2>&1 | Out-String)
  if ($LASTEXITCODE -ne 0) {
    Write-Warn "winget source reset no completó correctamente. Salida: $resetOutput"
  }

  $updateOutput = (& winget source update 2>&1 | Out-String)
  if ($LASTEXITCODE -ne 0) {
    Write-Warn "winget source update no completó correctamente. Salida: $updateOutput"
  }

  if (Test-WingetHealthy) {
    Write-Ok 'Fuentes de winget reparadas correctamente.'
    return $true
  }

  Write-Warn 'No fue posible reparar winget automáticamente.'
  return $false
}

function Ensure-PackageManager {
  if (Test-Command 'winget') {
    if (Test-WingetHealthy) {
      $script:PackageManager = 'winget'
      Write-Info 'Se usará winget para instalación de paquetes.'
      return
    }

    Write-Warn 'winget está instalado, pero sus fuentes no están disponibles o están corruptas.'
    if (Repair-WingetSources) {
      $script:PackageManager = 'winget'
      Write-Info 'Se usará winget para instalación de paquetes.'
      return
    }

    Write-Warn 'winget no está operativo después del intento de reparación. Se intentará usar Chocolatey.'
  }

  if (-not (Test-Command 'winget')) {
    Write-Warn 'No se encontró winget en este equipo.'
  }

  if (Test-Command 'choco') {
    $script:PackageManager = 'choco'
    Write-Info 'Se usará Chocolatey para instalación de paquetes.'
    return
  }

  if (Ask-YesNo -Question '¿Deseas que el script instale Chocolatey como alternativa?' -DefaultYes $true) {
    Install-Chocolatey
    $script:PackageManager = 'choco'
    Write-Info 'Se usará Chocolatey para instalación de paquetes.'
    return
  }

  throw @"
No hay gestor de paquetes disponible (winget/choco).

Opciones:
1) Instalar/actualizar "App Installer" desde Microsoft Store (winget).
2) Permitir instalación de Chocolatey cuando el script lo solicite.
3) Ejecutar setup manual con instaladores.

En equipos corporativos puede estar deshabilitado por políticas de TI.
"@
}

function Install-WithWinget {
  param(
    [Parameter(Mandatory = $true)][string]$Id,
    [Parameter(Mandatory = $true)][string]$DisplayName
  )

  function Test-WingetPackageInstalled {
    param([string]$PackageId)

    try {
      $listOutput = (& winget list --id $PackageId --exact --accept-source-agreements 2>&1 | Out-String)
      if ($LASTEXITCODE -ne 0) {
        return $false
      }

      return ($listOutput.ToLowerInvariant() -match [regex]::Escape($PackageId.ToLowerInvariant()))
    }
    catch {
      return $false
    }
  }

  Write-Step "Instalando $DisplayName"

  $lastWingetOutput = ''
  $lastWingetExitCode = 0

  for ($attempt = 1; $attempt -le 2; $attempt++) {
    $wingetOutput = (& winget install --id $Id --exact --source winget --accept-source-agreements --accept-package-agreements --silent 2>&1 | Out-String)
    $wingetExitCode = $LASTEXITCODE
    $lastWingetOutput = $wingetOutput
    $lastWingetExitCode = $wingetExitCode

    if ($wingetExitCode -eq 0) {
      Write-Ok "$DisplayName instalado (o ya presente)."
      return
    }

    if (Test-WingetPackageInstalled -PackageId $Id) {
      Write-Info "$DisplayName ya estaba instalado y no requiere actualización."
      Write-Ok "$DisplayName disponible para uso."
      return
    }

    $isSourceError = ($wingetOutput -match 'source reset') -or ($wingetOutput -match '0x8a15000f') -or ($wingetOutput -match 'Faltan los datos requeridos por el origen')
    if ($attempt -eq 1 -and $isSourceError) {
      Write-Warn "winget reportó error de fuentes al instalar $DisplayName. Intentando reparación y reintento..."
      if (-not (Repair-WingetSources)) {
        break
      }

      continue
    }

    break
  }

  throw "Falló la instalación de $DisplayName con winget (exit code: $lastWingetExitCode). Salida: $lastWingetOutput"
}

function Install-WithChocolatey {
  param(
    [Parameter(Mandatory = $true)][string[]]$PackageNames,
    [Parameter(Mandatory = $true)][string]$DisplayName
  )

  foreach ($package in $PackageNames) {
    Write-Step "Instalando $DisplayName con Chocolatey ($package)"
    choco install $package -y --no-progress
    if ($LASTEXITCODE -eq 0) {
      Write-Ok "$DisplayName instalado (o ya presente)."
      return
    }

    Write-Warn "Falló intento con paquete '$package'."
  }

  throw "No se pudo instalar $DisplayName con Chocolatey."
}

function Install-Tool {
  param(
    [Parameter(Mandatory = $true)][string]$DisplayName,
    [string]$WingetId,
    [string[]]$ChocolateyPackages
  )

  if ($script:PackageManager -eq 'winget') {
    try {
      Install-WithWinget -Id $WingetId -DisplayName $DisplayName
      return
    }
    catch {
      Write-Warn "winget falló para $DisplayName. Se intentará fallback a Chocolatey."

      if (-not (Test-Command 'choco')) {
        if (Ask-YesNo -Question '¿Deseas que el script instale Chocolatey para continuar?' -DefaultYes $true) {
          Install-Chocolatey
        }
      }

      if (Test-Command 'choco') {
        $script:PackageManager = 'choco'
        Install-WithChocolatey -PackageNames $ChocolateyPackages -DisplayName $DisplayName
        return
      }

      throw $_
    }
    return
  }

  if ($script:PackageManager -eq 'choco') {
    Install-WithChocolatey -PackageNames $ChocolateyPackages -DisplayName $DisplayName
    return
  }

  throw 'No hay gestor de paquetes configurado para instalar herramientas.'
}

function Refresh-Path {
  $machinePath = [Environment]::GetEnvironmentVariable('Path', 'Machine')
  $userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
  $env:Path = "$machinePath;$userPath"
}

function Show-Version {
  param(
    [Parameter(Mandatory = $true)][string]$Command,
    [Parameter(Mandatory = $true)][string]$Label
  )

  try {
    $output = & $Command --version 2>$null
    if ($LASTEXITCODE -eq 0 -and $output) {
      Write-Ok "$Label -> $output"
    } else {
      Write-Warn "No se pudo verificar versión de $Label en esta sesión."
    }
  } catch {
    Write-Warn "No se pudo verificar versión de $Label en esta sesión."
  }
}

function Ask-YesNo {
  param(
    [Parameter(Mandatory = $true)][string]$Question,
    [bool]$DefaultYes = $true
  )

  $suffix = if ($DefaultYes) { '[Y/n]' } else { '[y/N]' }
  while ($true) {
    $answer = (Read-Host "$Question $suffix").Trim().ToLowerInvariant()
    if ([string]::IsNullOrWhiteSpace($answer)) {
      return $DefaultYes
    }

    if ($answer -in @('y', 'yes', 's', 'si')) { return $true }
    if ($answer -in @('n', 'no')) { return $false }
    Write-Warn 'Respuesta no válida. Ingresa y/n.'
  }
}

function Read-EmailInput {
  while ($true) {
    $email = (Read-Host 'Ingresa tu correo para GitHub (ej: nombre@empresa.com)').Trim()
    if ($email -match '^[^@\s]+@[^@\s]+\.[^@\s]+$') {
      return $email
    }
    Write-Warn 'Correo inválido. Inténtalo de nuevo.'
  }
}

function Get-OpenSshPublicKey {
  param(
    [Parameter(Mandatory = $true)][string]$PubPath
  )

  if (-not (Test-Path $PubPath)) {
    throw "No se encontró la llave pública en: $PubPath"
  }

  $lines = Get-Content -Path $PubPath | ForEach-Object { $_.Trim() } | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
  $candidate = $null

  foreach ($line in $lines) {
    if ($line -match '^(ssh-ed25519|ssh-rsa|ecdsa-sha2-nistp(256|384|521))\s+[A-Za-z0-9+/=]+(\s+.+)?$') {
      $candidate = $line
      break
    }
  }

  if (-not $candidate) {
    throw @"
La llave pública no tiene formato OpenSSH válido.

Verifica el archivo:
$PubPath

Debe verse como una sola línea iniciando por "ssh-ed25519" (o ssh-rsa/ecdsa-sha2-*).
"@
  }

  & ssh-keygen -l -f "$PubPath" 1>$null 2>$null
  if ($LASTEXITCODE -ne 0) {
    throw "El archivo de llave pública no pasó validación con ssh-keygen: $PubPath"
  }

  return $candidate
}

function Setup-GitHubSsh {
  Write-Step 'Configuración de llave SSH para GitHub'

  if (-not (Ask-YesNo -Question '¿Quieres configurar llave SSH para GitHub ahora?' -DefaultYes $true)) {
    Write-Info 'Se omitió la configuración SSH por elección del usuario.'
    return
  }

  if (-not (Test-Command 'ssh-keygen')) {
    Write-Warn 'No se encontró ssh-keygen. Instala OpenSSH Client y vuelve a ejecutar el setup.'
    return
  }

  $sshDir = Join-Path $HOME '.ssh'
  if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir | Out-Null
  }

  $defaultKeyPath = Join-Path $sshDir 'id_ed25519'
  $keyPath = $defaultKeyPath

  if ((Test-Path $defaultKeyPath) -and (Test-Path "$defaultKeyPath.pub")) {
    Write-Info "Ya existe una llave en: $defaultKeyPath"
    if (-not (Ask-YesNo -Question '¿Deseas usar esa llave existente?' -DefaultYes $true)) {
      $keyPath = Join-Path $sshDir 'id_ed25519_hackathon'
    }
  }

  if (-not (Test-Path $keyPath) -or -not (Test-Path "$keyPath.pub")) {
    $email = Read-EmailInput

    if (Test-Command 'git') {
      git config --global user.email "$email"
      Write-Ok "Git configurado con user.email=$email"
    }

    Write-Step "Generando llave SSH en $keyPath"
    $cmdLine = "ssh-keygen -t ed25519 -C `"$email`" -f `"$keyPath`" -N `"`""
    & cmd.exe /d /c $cmdLine
    if ($LASTEXITCODE -ne 0) {
      throw 'No se pudo generar la llave SSH.'
    }
    Write-Ok 'Llave SSH generada correctamente.'
  } else {
    Write-Ok 'Se usará la llave SSH existente.'
  }

  $pubPath = "$keyPath.pub"
  $publicKey = Get-OpenSshPublicKey -PubPath $pubPath

  if (Test-Command 'Set-Clipboard') {
    Set-Clipboard -Value $publicKey
    Write-Ok 'La llave pública fue copiada al portapapeles.'
  } elseif (Test-Command 'clip') {
    $publicKey | clip
    Write-Ok 'La llave pública fue copiada al portapapeles.'
  } else {
    Write-Warn 'No se encontró utilidad para copiar al portapapeles. Copia manualmente la llave mostrada.'
  }

  Write-Host "`nCopia esta llave pública en GitHub > Settings > SSH and GPG keys:" -ForegroundColor Cyan
  Write-Host $publicKey -ForegroundColor White

  if (Ask-YesNo -Question '¿Abrir ahora la página de llaves SSH de GitHub?' -DefaultYes $true) {
    Start-Process 'https://github.com/settings/keys'
  }
}

try {
  Initialize-Logging
  Write-Info "Archivo de logs: $script:LogFilePath"
  Write-Step 'Validando permisos y prerequisitos'
  Require-Admin
  Ensure-PackageManager
  Write-Ok 'Prerequisitos listos.'

  if (-not $SkipGit) {
    Install-Tool -DisplayName 'Git' -WingetId 'Git.Git' -ChocolateyPackages @('git')
  } else {
    Write-Info 'Saltando Git por parámetro.'
  }

  if (-not $SkipNode) {
    Install-Tool -DisplayName 'Node.js LTS' -WingetId 'OpenJS.NodeJS.LTS' -ChocolateyPackages @('nodejs-lts')
  } else {
    Write-Info 'Saltando Node.js por parámetro.'
  }

  if (-not $SkipPython) {
    Install-Tool -DisplayName 'Python 3.12' -WingetId 'Python.Python.3.12' -ChocolateyPackages @('python312', 'python')
  } else {
    Write-Info 'Saltando Python por parámetro.'
  }

  Refresh-Path

  if (-not $SkipPnpm) {
    Write-Step 'Habilitando Corepack y pnpm'
    if (-not (Test-Command 'corepack')) {
      throw 'No se encontró corepack. Verifica instalación de Node.js y vuelve a ejecutar.'
    }

    corepack enable
    corepack prepare pnpm@latest --activate
    Write-Ok 'pnpm habilitado vía Corepack.'
  } else {
    Write-Info 'Saltando pnpm por parámetro.'
  }

  Write-Step 'Validando versiones instaladas'
  if (-not $SkipGit) { Show-Version -Command 'git' -Label 'git' }
  if (-not $SkipNode) { Show-Version -Command 'node' -Label 'node' }
  if (-not $SkipPnpm) {
    if (Test-Command 'pnpm.cmd') {
      Show-Version -Command 'pnpm.cmd' -Label 'pnpm'
    } else {
      Write-Warn 'pnpm no está disponible todavía en PATH de esta sesión.'
    }
  }
  if (-not $SkipPython) {
    if (Test-Command 'py') {
      Show-Version -Command 'py' -Label 'py launcher'
    } elseif (Test-Command 'python') {
      Show-Version -Command 'python' -Label 'python'
    } else {
      Write-Warn 'Python parece instalado, pero no disponible en PATH en esta sesión.'
    }
  }

  if (-not $SkipSsh) {
    Setup-GitHubSsh
  } else {
    Write-Info 'Saltando configuración SSH por parámetro.'
  }

  Write-Host "`nSetup completado. Recomendación: cerrar y abrir la terminal antes de empezar a desarrollar." -ForegroundColor Green
  Write-Host "Si PowerShell bloquea pnpm por políticas, usa: pnpm.cmd --version" -ForegroundColor Yellow
}
catch {
  Write-LogLine "ERROR $($_.Exception.Message)"
  Write-Host "`nError durante el setup: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host 'Si estás en un equipo corporativo, revisa políticas de TI (winget, Store, proxy, permisos).' -ForegroundColor Yellow
  exit 1
}
finally {
  if ($script:LogFilePath) {
    Write-Host "Log guardado en: $script:LogFilePath" -ForegroundColor Gray
    if ($script:TranscriptStarted -and $script:TranscriptFilePath) {
      Write-Host "Transcript guardado en: $script:TranscriptFilePath" -ForegroundColor Gray
    }
  }
  Finalize-Logging
}
