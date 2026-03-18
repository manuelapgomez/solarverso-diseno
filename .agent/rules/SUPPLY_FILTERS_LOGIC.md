# Regla de Diseño y Lógica: Filtros de Suministro
- **UI de la Barra:** - Input de búsqueda general con ícono de lupa, esquinas redondeadas suaves.
  - Filtros de atributo (Período, Asignado, Inversionista, Portafolio): Estilo "Pill" con fondo azul claro (`bg-blue-100` o similar), texto oscuro y esquinas totalmente redondeadas (`rounded-full`).
  - Filtros de Estado: Estilo "Outline Pill", fondo blanco o transparente, borde del color del estado (morado, azul, verde, naranja, etc.) y texto del mismo color del borde.
- **Lógica de Filtrado (Deep Filtering):**
  - La búsqueda de texto no solo debe evaluar los campos de nivel superior de la tarjeta (Nombre del Buque, BL), sino que debe iterar sobre los `slots` o `equipos` internos del buque para ver si alguna minigranja (ej. "Uruaco 1") hace match.
  - Los filtros son aditivos (AND logic). Si selecciono "Portafolio X" y Estado "En tránsito", el buque debe cumplir ambas.
