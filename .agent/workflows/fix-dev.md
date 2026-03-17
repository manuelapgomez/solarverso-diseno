# Workflow: /fix-dev
Descripción: Comando de emergencia si el entorno local falla.
1. Detén cualquier proceso que bloquee el puerto de desarrollo.
2. Verifica si falta ejecutar `npm install` y hazlo si es necesario.
3. Vuelve a intentar levantar el entorno con `npm run dev` y confirma su estado.
