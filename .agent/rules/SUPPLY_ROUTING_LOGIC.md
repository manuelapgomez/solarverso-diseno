# Regla de Arquitectura: Vistas Gemelas de Suministro
- **El Contenedor (SupplyLayout):** Será el componente padre. Mantendrá un estado `activeTab` ('vessels' | 'materials'). Renderizará los botones de pestañas superiores.
- **Renderizado Condicional:** 
  - Si `activeTab === 'vessels'`, renderiza `<VesselAssignmentView />`.
  - Si `activeTab === 'materials'`, renderiza `<MaterialTrackingView />`.
- **Inyección de Navegación:** El padre debe pasar una prop `onSwitchToVessels={() => setActiveTab('vessels')}` al componente `<MaterialTrackingView />`.
- **Interacción del Faltante:** En la grilla de materiales, la celda de estado "Faltante" (caja punteada roja) debe usar el evento `onClick` para disparar `onSwitchToVessels()`, actuando como un atajo rápido para resolver el problema.
- **Datos de Prueba (Mock Data):** La vista de materiales debe construirse con un JSON temporal estructurado así: `[{ investor: 'FMO', portfolios: [{ id, name, isPriority, projects: [{ name, location, materials: { panels: { status: 'Zarpe', date: 'FEB.26/25' }, tracker: { status: 'Faltante' } } }] }] }]`.
