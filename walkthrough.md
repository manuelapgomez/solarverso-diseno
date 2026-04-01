# Refactor de Priorización y Filtrado de Suministros

Se ha implementado el refactor "arriesgado" para enlazar la vista jerárquica de portafolios priorizados con la vista general de la cadena de suministro, creando una experiencia dinámica y relacional.

## Cambios Principales Implementados

### 1. Panel de Portafolios: Visibilidad por Equipamiento
El DOM de las minigranjas dentro de los portafolios `PortfoliosPanel.tsx` ha abandonado el modelo simple de fila para convertirse en una matriz de control de componentes críticos.
- Ahora cada minigranja (`MGS-###`) cuenta con columnas independientes para: **Paneles, Inversores, Reconectadores, Trackers, Shelters**.
- Se programó la lógica visual (enlazada a los nuevos modelos de datos mockeados en `mockLogistica.ts`) para renderizar de manera llamativa las tarjetas de componente **"Faltante"** (en rojo claro) o en progreso con sus respetivos saltos hacia la "Hoja de Vida" si ya se encuentran en gestión.

### 2. Nueva Modal: HV de Requerimientos
Se diseñó y creó el componente `HVRequerimientosModal.tsx`. 
- **Objetivo**: A diferencia de la modal de gestión/reasignación, esta modal expone qué características de diseño e ingeniería requiere dicho equipo faltante (Ej: Hileras "1P", "Zona de vientos alta", etc.).
- **Interacción Focalizada**: Posee un botón de acción primario llamado **"Filtrar Dashboard por este Requerimiento"**.

### 3. Filtrado Dinámico de Embarques y Slots
Se elevó el estado activador de la modal a las dos super-estructuras que rigen la visualización de los barcos: `VesselAssignmentView.tsx` y `ShipDashboard.tsx`.
- Cuando se aprieta el botón de filtrar en el HV de Requerimientos, la Modal se oculta y la UI principal muestra un **Banner Activo (azulado)** notificando al usuario que está visualizando datos filtrados.
- El algoritmo `filteredBarcos` escanea las entrañas (`slots`) de cada barco. Si el barco no lleva un slot que cumpla estrictamente con el _Tipo de equipo_ y con el 100% de las llaves solicitadas en las especificaciones (`specs`), **el barco se oculta de la pantalla**.
- Los despachadores o supervisores ahora pueden enfocarse en ese puñado de barcos que coinciden matemáticamente con lo que la minigranja priorizada está pidiendo.

## Validación de Resultados
Se ejecutó un `npm run build` confirmando que todas las ampliaciones de tipado (TypeScripts) encajaban de manera perfecta sin alertar al compilador y garantizando un código listo para su despliegue a la rama de producción principal.
