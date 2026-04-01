# Tareas Refactor Portafolios Priorizados

- [x] Fase 1: Capa de Datos (`mockLogistica.ts`)
  - [x] Añadir interfaces `EquipmentRequirement` al modelo `Minigranja`.
  - [x] Actualizar datos mock para reflejar escenarios con "Faltantes" y equipos "Entregados" o en "Nacionalización" con especificaciones base.
- [x] Fase 2: Nuevo Modal Funcional
  - [x] Crear el componente `HVRequerimientosModal.tsx`.
  - [x] Diseñar el panel que expone las "specs" del requerimiento (Cat, Hileras, Zona de Vientos).
  - [x] Botón de acción principal: "Buscar Compatibilidad".
- [x] Fase 3: Renovación de la UI `PortfoliosPanel.tsx`
  - [x] Reestructurar el render de la `Minigranja` list item al Grid 2D visto en las mockups (Propiedades por columnas: Paneles | Inv | Reco | Trackers | Shelters).
  - [x] Lógica de pintar rojo "Faltante" o tarjeta blanca para estados en proceso.
  - [x] Incluir handlers de click para abrir la modal de `HVRequerimientosModal`.
  - [x] Actualizar `logistica.css` para este nuevo diseño.
- [x] Fase 4: Integración del Filtrado
  - [x] Proveer contexto/callback entre `PortfoliosPanel` y `SupplyLayout` -> `ShipDashboard` para el estado del filtro `SpecEquipo`.
  - [x] Renderizar un "Banner Activo" informando al usuario que está en la vista `Filtrada` por los requerimientos de la Minigranja X.
  - [x] Aplicar algoritmo de `.filter` en los slots del dashboard en base a las Specs activas para ocultar/transparentar información ajena.
