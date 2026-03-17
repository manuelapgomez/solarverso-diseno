# Setup automático para hackathon (Windows)

Este paquete instala en Windows, de forma automatizada:

- Git
- Node.js LTS
- pnpm (vía Corepack)
- Python 3.12

## Archivos

- `run-setup.bat`: doble clic para ejecutar instalación.
- `setup-hackathon.ps1`: script principal de instalación.
- `run-uninstall.bat`: doble clic para ejecutar desinstalación.
- `uninstall-hackathon.ps1`: script principal de desinstalación.

## Uso para participantes (no técnicos)

1. Descomprimir esta carpeta.
2. Clic derecho en `run-setup.bat` → **Ejecutar como administrador**.
3. Aceptar el prompt de UAC (si aparece).
4. Esperar a que termine.
5. Cerrar y abrir la terminal.

Al finalizar, el script muestra la ruta de log. Por defecto queda en `logs/setup-YYYYMMDD-HHMMSS.log`.

## Verificación rápida

Abrir PowerShell y ejecutar:

```powershell
git --version
node --version
pnpm.cmd --version
py --version
```

Si `pnpm --version` falla en PowerShell por políticas de ejecución, usa `pnpm.cmd --version`.

## Configuración SSH para GitHub

Durante el setup, el script preguntará si deseas configurar llave SSH para GitHub.

- Solicita tu correo como input.
- Genera llave `ed25519` (o reutiliza una existente).
- Copia automáticamente la clave pública al portapapeles.
- Puede abrir `https://github.com/settings/keys` para pegarla.

Si antes falló con `option requires an argument -- N`, vuelve a correr el setup: el script ya usa una invocación compatible con Windows PowerShell 5.1.

Si GitHub muestra `Key is invalid. You must supply a key in OpenSSH public key format`, vuelve a correr el setup: ahora valida automáticamente el formato del archivo `.pub` antes de copiarlo.

## Requisitos y limitaciones

1. **Permisos de administrador**: necesarios para instalación global.
2. **Gestor de paquetes disponible**: el script usa `winget` si existe; si detecta fuentes corruptas (ej. `0x8a15000f`) intenta `winget source reset/update` automáticamente y, si falla, ofrece instalar/usar `Chocolatey` como fallback.
3. **Conexión a internet**: descarga paquetes desde fuentes externas.
4. **Proxy/firewall corporativo**: puede bloquear Store/winget/GitHub/npm.
5. **Políticas de ejecución**: el `.bat` usa `-ExecutionPolicy Bypass` solo para esta ejecución.
6. **PATH en sesión actual**: a veces requiere cerrar/reabrir terminal.

## Notas para TI / organizadores

- Hacer una **prueba piloto** en 2-3 equipos de perfiles distintos.
- Tener un **plan B offline** (instaladores `.msi/.exe` en USB o red local).
- Validar que Microsoft Store y `winget` estén habilitados en imagen corporativa.
- Si `winget` no existe, el script intentará `Chocolatey`; si TI bloquea ambos, usar instaladores internos (SCCM/Intune).
- En algunos equipos `winget` devuelve código de salida no-cero cuando el paquete ya está instalado sin updates; el script ya lo maneja como estado válido.

## Opciones del script (avanzado)

Puedes saltar componentes concretos:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-hackathon.ps1 -SkipPython
powershell -ExecutionPolicy Bypass -File .\setup-hackathon.ps1 -SkipGit -SkipNode
powershell -ExecutionPolicy Bypass -File .\setup-hackathon.ps1 -SkipSsh
powershell -ExecutionPolicy Bypass -File .\setup-hackathon.ps1 -LogPath .\logs\setup-manual.log
```

## Desinstalación (rollback)

Para intentar dejar el equipo limpio de las herramientas instaladas por este paquete:

1. Clic derecho en `run-uninstall.bat` → **Ejecutar como administrador**.
2. Confirmar prompts.
3. Revisar log generado en `logs/uninstall-YYYYMMDD-HHMMSS.log`.

La desinstalación intenta remover por `winget` y también por `Chocolatey` (si está disponible), para cubrir ambos escenarios.

Opciones avanzadas:

```powershell
powershell -ExecutionPolicy Bypass -File .\uninstall-hackathon.ps1 -Force
powershell -ExecutionPolicy Bypass -File .\uninstall-hackathon.ps1 -RemoveSshKeys
```

## Siguiente mejora recomendada

Crear una variante **offline/corporativa** del script que instale desde un repositorio interno o carpeta compartida aprobada por TI.
