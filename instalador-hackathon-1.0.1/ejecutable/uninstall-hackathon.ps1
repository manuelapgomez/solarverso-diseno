param(
  [switch]$RemoveSshKeys,
  [switch]$Force,
  [string]$LogPath
)

$ErrorActionPreference = 'Continue'
$script:LogFilePath = $null

function Write-LogLine {
  param([string]$Message)
  if (-not $script:LogFilePath) {
    return
  }

  $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
  Add-Content -Path $script:LogFilePath -Value "[$timestamp] $Message"
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

function Ask-YesNo {
  param(
    [Parameter(Mandatory = $true)][string]$Question,
    [bool]$DefaultYes = $false
  )

  if ($Force) {
    return $true
  }

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

function Initialize-Logging {
  if ([string]::IsNullOrWhiteSpace($LogPath)) {
    $logsDir = Join-Path $PSScriptRoot 'logs'
    if (-not (Test-Path $logsDir)) {
      New-Item -ItemType Directory -Path $logsDir | Out-Null
    }
    $script:LogFilePath = Join-Path $logsDir ("uninstall-{0}.log" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
  } else {
    $targetDir = Split-Path -Parent $LogPath
    if (-not [string]::IsNullOrWhiteSpace($targetDir) -and -not (Test-Path $targetDir)) {
      New-Item -ItemType Directory -Path $targetDir | Out-Null
    }
    $script:LogFilePath = $LogPath
  }

  New-Item -ItemType File -Path $script:LogFilePath -Force | Out-Null
  Write-LogLine 'Inicio de desinstalación.'
}

function Test-Command {
  param([string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

function Uninstall-WithWinget {
  param(
    [Parameter(Mandatory = $true)][string]$Id,
    [Parameter(Mandatory = $true)][string]$DisplayName
  )

  if (-not (Test-Command 'winget')) {
    Write-Warn 'winget no está disponible. No se puede desinstalar automáticamente.'
    return
  }

  Write-Step "Desinstalando $DisplayName"
  winget uninstall --id $Id --exact --source winget --accept-source-agreements --silent
  if ($LASTEXITCODE -eq 0) {
    Write-Ok "$DisplayName desinstalado (o no estaba instalado)."
  } else {
    Write-Warn "No se pudo confirmar desinstalación de $DisplayName. Revisar manualmente."
  }
}

function Uninstall-WithChocolatey {
  param(
    [Parameter(Mandatory = $true)][string[]]$PackageNames,
    [Parameter(Mandatory = $true)][string]$DisplayName
  )

  if (-not (Test-Command 'choco')) {
    Write-Warn 'Chocolatey no está disponible. No se puede desinstalar por choco.'
    return
  }

  foreach ($package in $PackageNames) {
    Write-Step "Desinstalando $DisplayName con Chocolatey ($package)"
    choco uninstall $package -y --no-progress
    if ($LASTEXITCODE -eq 0) {
      Write-Ok "$DisplayName desinstalado (o no estaba instalado) por Chocolatey."
      return
    }

    Write-Warn "No se pudo desinstalar con paquete '$package'."
  }

  Write-Warn "No se pudo confirmar desinstalación de $DisplayName por Chocolatey."
}

function Uninstall-Tool {
  param(
    [Parameter(Mandatory = $true)][string]$DisplayName,
    [Parameter(Mandatory = $true)][string]$WingetId,
    [Parameter(Mandatory = $true)][string[]]$ChocolateyPackages
  )

  $hasWinget = Test-Command 'winget'
  $hasChoco = Test-Command 'choco'

  if (-not $hasWinget -and -not $hasChoco) {
    Write-Warn "No hay winget/choco disponibles para desinstalar $DisplayName automáticamente."
    return
  }

  if ($hasWinget) {
    Uninstall-WithWinget -Id $WingetId -DisplayName $DisplayName
  }

  if ($hasChoco) {
    Uninstall-WithChocolatey -PackageNames $ChocolateyPackages -DisplayName $DisplayName
  }
}

function Remove-HackathonSshKeys {
  Write-Step 'Eliminando llaves SSH creadas para hackathon'
  $sshDir = Join-Path $HOME '.ssh'
  $candidates = @(
    (Join-Path $sshDir 'id_ed25519_hackathon'),
    (Join-Path $sshDir 'id_ed25519_hackathon.pub')
  )

  foreach ($file in $candidates) {
    if (Test-Path $file) {
      Remove-Item -Path $file -Force
      Write-Ok "Eliminado: $file"
    }
  }

  Write-Warn 'No se elimina id_ed25519 por seguridad (puede ser llave personal previa).'
}

try {
  Initialize-Logging
  Write-Host "Log guardado en: $script:LogFilePath" -ForegroundColor Gray

  if (-not (Ask-YesNo -Question 'Esto desinstalará Git, Node.js y Python instalados por winget/choco. ¿Continuar?' -DefaultYes $false)) {
    Write-Warn 'Desinstalación cancelada por el usuario.'
    exit 0
  }

  Uninstall-Tool -DisplayName 'Git' -WingetId 'Git.Git' -ChocolateyPackages @('git')
  Uninstall-Tool -DisplayName 'Node.js LTS' -WingetId 'OpenJS.NodeJS.LTS' -ChocolateyPackages @('nodejs-lts', 'nodejs')
  Uninstall-Tool -DisplayName 'Python 3.12' -WingetId 'Python.Python.3.12' -ChocolateyPackages @('python312', 'python')

  if (Test-Command 'corepack') {
    Write-Step 'Deshabilitando Corepack (pnpm shims)'
    corepack disable
    if ($LASTEXITCODE -eq 0) {
      Write-Ok 'Corepack deshabilitado.'
    } else {
      Write-Warn 'No se pudo deshabilitar Corepack automáticamente.'
    }
  }

  if ($RemoveSshKeys -or (Ask-YesNo -Question '¿Eliminar llaves SSH de hackathon (id_ed25519_hackathon)?' -DefaultYes $false)) {
    Remove-HackathonSshKeys
  }

  Write-Host "`nDesinstalación finalizada. Reinicia la terminal para refrescar PATH." -ForegroundColor Green
}
catch {
  Write-LogLine "ERROR $($_.Exception.Message)"
  Write-Host "Error durante la desinstalación: $($_.Exception.Message)" -ForegroundColor Red
  exit 1
}
finally {
  Write-LogLine 'Fin de desinstalación.'
}
