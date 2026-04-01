# Integración de Estados de Equipos, HV de Requerimientos y Filtrado Dinámico

Este plan documenta el refactor mayor de la vista de "Portafolios Priorizados", añadiendo las columnas de requerimientos de equipos (Paneles, Inversores, Reconectadores, Trackers, Shelters) a cada Minigranja, así como la funcionalidad de filtrado en cascada hacia la vista de la "Gestión de Embarques" mediante una nueva modal de especificaciones ("HV de Requerimientos").

## User Review Required

> [!WARNING]
> **Cambio Arquitectónico Importante:** Se propondrá conectar el panel inferior de "Portafolios Priorizados" con la vista general de la lista de barcos (`ShipDashboard`). Al interactuar con la "HV de Requerimientos" de un equipo faltante, la vista de Suministro se filtrará para mostrar únicamente los embarques/slots que contengan equipos con características compatibles (Categoría, Hileras, Corrosión, etc.).
> 
> ¿Estás de acuerdo con manejar este filtro global a nivel del `SupplyLayout` o `LogisticaPage` y pasarlo al dashboard de buques?

## Proposed Changes

### Data Layer (`mockLogistica.ts`)

Actualización de interfaces para soportar el nuevo nivel de especificidad y los equipos esperados por Minigranja:

#### [MODIFY] mockLogistica.ts
- Expandir la interfaz `Minigranja` para incluir un arreglo `requerimientos?: EquipmentRequirement[]`.
- Añadir la nueva interfaz `EquipmentRequirement`:
  ```typescript
  export type EquipmentRequirement = {
    tipo: 'Tracker' | 'Shelter' | 'Inversor' | 'Paneles' | 'Reconectadores';
    estado: 'Faltante' | 'Ingreso a Zona Franca' | 'Licencia de importación' | 'Nacionalización' | 'Entregado';
    fecha?: string;
    specs?: SpecEquipo; // Para reutilizar propiedades como hileras, corrosionAtmosferica, etc.
  }
  ```
- Llenar los datos mock para los portafolios actuales integrando estos requerimientos, imitando el diseño de "Minigranja 0001 - Uruaco2" con sus "Faltantes" e "Ingresos".

---

### UI Components

#### [NEW] HVRequerimientosModal.tsx
- Crear un nuevo componente modal tipo Slide In o Popup.
- Mostrar naturaleza _informativa_ pero con acción: Detalles obligatorios que necesita el proyecto (Ej: Tracker con 4 hileras, Zona de vientos alta).
- Botón principal: "Buscar Compatibilidad en Tránsito", el cual dispara un evento `onFilterSpecs(specs)`.

#### [MODIFY] PortfoliosPanel.tsx
- Refactor dramático del DOM expandido de los portafolios:
  - Cambiar la simple lista de "Minigranja X / 20%" por una tabla o Grid apilado.
  - Para cada minigranja, renderizar el encabezado (Nombre, Ubicación) y las 5 columnas ("Paneles | Inversores | Reconectadores | Trackers | Shelters").
  - Si una columna detecta un "Faltante", mostrar la tarjeta roja. Si detecta estado avanzado, mostrar la tarjeta validada con el botón "HV: [EQUIPO]".
  - Al dar click en cualquier estado, lanzar `HVRequerimientosModal` mandando las especificaciones.

#### [MODIFY] SupplyLayout.tsx / LogisticaPage.tsx
- Elevar el estado del filtro de especificaciones `activeRequirementFilter`:
  ```typescript
  const [activeReqFilter, setActiveReqFilter] = useState<SpecEquipo | null>(null);
  ```
- Al recibir una activación desde el `PortfoliosPanel` (a través de la modal HV de requerimientos), aplicar este filtro al estado.

#### [MODIFY] ShipDashboard.tsx
- Aplicar un prop nuevo `requirementFilter={activeReqFilter}`.
- Si este prop existe, `.filter()` los buques y sus slots para ocultar buques enteros (o volverlos translúcidos) si no cargan el equipamiento con las specs que acabamos de buscar desde el portafolio.
- Añadir un pequeño banner en la parte superior: `"Mostrando suministro compatible con: Tracker (4 Hileras, Zona Alta)" -> [Limpiar Filtro]`.

## Open Questions

> [!NOTE]
> 1. En la modal "HV de Requerimientos", al hacer clic en "Ver requerimientos" o "Buscar inventario", ¿la modal en sí misma se debe cerrar automáticamente para revelar la vista de barcos filtrada?
> 2. Si un equipo es "Faltante", ¿también tiene un botón que abre su HV de requerimientos, demostrando *qué* falta exactamente, para poder iniciar la búsqueda en el dashboard?

## Verification Plan

### Manual Verification
- Cargar la vista de suministro, expandir el Panel inferior de priorizados.
- Validar visualmente la alineación de las columnas de equipamiento por minigranja (Tarjetas rojas y tarjetas verdes con botón).
- Abrir un HV de requerimientos de Tracker, pulsar filtro.
- Validar que la vista de `ShipDashboard` limite drásticamente los buques solo a aquellos que contengan al menos 1 slot de tipo Tracker compatible con las specs.
- Limpiar el filtro y recuperar el listado inicial.
