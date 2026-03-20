# Regla: Navegación del Pipeline Logístico
- **Componente Stepper:** Crear un sub-enrutador visual (Stepper/Tabs) dentro de la vista principal de Suministro con 4 pasos: "BARCOS EN TRÁNSITO", "CONTAINERS EN PUERTO", "CONTAINERS EN CAMIONES", "EQUIPO EN CAMPO".
- **Aislamiento:** El componente actual `<VesselAssignmentView />` DEBE ser asignado intacto al primer paso ("Barcos"). La vista gemela de "Seguimiento de Materiales" no debe verse afectada por este stepper.
