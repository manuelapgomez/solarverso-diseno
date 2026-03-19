# Regla de Negocio: Slots Pre-cargados y Asignación
- **Definición de Slot:** Un "Slot" NO es un espacio vacío en el barco. Un Slot representa una pieza de equipo físico que ya viene en el buque (ej. 1 Slot = 1 Tracker pre-comprado).
- **Inmutabilidad del Equipo:** El tipo de equipo de un slot (`equipmentType`) es inmutable desde esta interfaz. El usuario no puede cambiar un Tracker por un Inversor.
- **Acción del Usuario:** La única acción permitida es Asignar o Reasignar el "Destino" (`assignedTo`), es decir, a qué Minigranja pertenece ese equipo.
- **Impacto en UI (Tarjetas):** Todos los slots (incluso los no asignados) deben mostrar qué equipo son. Un slot sin dueño debe decir algo como "Tracker / Sin asignar" visualmente claro.
- **Impacto en Modal:** El modal de acción pasa de llamarse "Llenar Slot" a "Asignar Destino". Debe eliminar el `select` de "Tipo de Equipo" (solo mostrarlo como texto informativo: "Asignando destino para: Tracker") y el único input debe ser buscar/seleccionar la Minigranja.
