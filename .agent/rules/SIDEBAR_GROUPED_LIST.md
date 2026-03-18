# Regla de Diseño: Lista Agrupada en Panel Lateral
- **Ubicación:** La nueva sección debe ir en la pestaña "Shipping Info", justo debajo de las tarjetas de métricas (Loading, Slots Used, etc.).
- **Contenedor:** Debe tener un título de sección (ej. "Equipos Asignados") y el contenedor de la lista debe tener scroll vertical (`overflow-y-auto`) con una altura máxima para no desbordar el viewport.
- **Categorías:** Agrupar en: Tracker, Shelter, Inversor, Paneles Solares, Reconectadores. Usar títulos limpios (`text-lg font-semibold`).
- **Badges/Tags:** Cada minigranja asignada se muestra como un badge. Deben organizarse en una grilla responsiva dentro del panel (`grid grid-cols-2` o `flex flex-wrap gap-2`).
- **Estilo del Badge:** Fondo blanco o gris muy claro, borde sutil, texto pequeño (`text-xs` o `text-sm`), padding ajustado (`px-3 py-1.5`, `rounded-md` o `rounded-full`).
