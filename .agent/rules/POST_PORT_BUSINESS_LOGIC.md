# Regla: Lógica de Negocio y Transiciones
- **Bloqueo Aduanero (BT):** Para que los slots de un barco pasen a la vista de "Puerto", su propiedad de `BT_status` (Beneficios Tributarios) debe estar aprobada. Si está pendiente, se quedan bloqueados lógicamente en la fase de tránsito.
- **Herencia Histórica:** Cuando un equipo pasa a "Puerto", el sistema debe registrar automáticamente el número de BL del barco en el array de historial de su "Hoja de Vida".
- **Reasignación Continua:** La función de reasignar a otra Minigranja debe estar activa en las fases de Puerto y Camiones, usando el mismo modal de "Hoja de Vida" que ya existe.
