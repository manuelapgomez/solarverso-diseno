# Regla de Diseño: Estabilidad de Grids Dinámicos
- **Contenedores de Tarjetas:** Deben usar CSS Grid estricto en lugar de Flexbox dinámico para evitar deformaciones cuando hay pocos hijos. Ejemplo: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start`.
- **Alineación:** Las tarjetas restantes después de un filtro siempre deben alinearse a la izquierda (inicio del contenedor) y arriba, nunca centrarse ni expandirse para llenar la fila.
- **Tamaño de Tarjeta:** La tarjeta (Card) NO debe tener clases como `flex-1` o `w-full` si está dentro de un flex contenedor sin un `max-w` definido. Debe heredar el ancho de su columna en el grid.
