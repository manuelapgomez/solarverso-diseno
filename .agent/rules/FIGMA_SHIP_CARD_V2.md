# Regla de Diseño: Ship Card V2 (Figma High-Density)

## Estructura General
- **Contenedor:** Fondo blanco, border-radius `46px`, sombra profunda (dropdown 1, 4, 10px). Layout `flex flex-col` con padding generoso (`px-10 py-12`).
- **Visualización de Carga:** Grilla de 15 slots (5x3) posicionada "dentro" de la silueta del buque.
  - **Slots Asignados:** Fondo `#edf5ff`, borde sólido marca blue, texto Poppins (Tipo de equipo + Nombre MGS).
  - **Slots Vacíos:** Borde dashed gris, texto "SLOT +".
- **Identidad del Buque:** Caja con fondo degradado azul muy suave, borde sutil. Contiene etiqueta "SHIP IDENTITY", Nombre del buque en bold y códigos BL.

## Métricas y Datos
- **Loading Progress:** Barra gruesa (`8px` de altura) con porcentaje alineado a la derecha.
- **Grilla de Info:** 
  - Iconos de 16px para ETA y Equipment.
  - Texto 14px bold para valores, 12px regular para etiquetas.
- **Ruta:** Iconos de 12px para origen (Shanghai) y destino (Barranquilla).
- **Footer:** Texto simple "X Bill(s) of Lading".

## Tipografía y Colores
- **Fuentes:** Poppins para títulos y estados de slots, Inter para cuerpo de datos, Consolas para códigos BL.
- **Colores:**
  - Primario: `#1d99cc` (Azul corp).
  - Textos: `#1e293b` (Slate-800) y `#64748b` (Slate-500).
  - Fondos: Blanco y `#eff6ff`.
