# Regla de Diseño: High-Density UI para Tarjetas de Suministro
- **Contexto:** Las tarjetas (Cards) de la vista de suministro (BL, Identidad del Buque, Slots) deben ser extremadamente compactas para permitir 3 columnas en resoluciones de escritorio (ej. 1440px).
- **Márgenes y Paddings:** Usar espaciados mínimos (ej. en Tailwind `p-2` o `p-3` en lugar de `p-6`).
- **Tipografía:** Usar tamaños de fuente reducidos (`text-xs` o `text-sm` para datos, `text-base` máximo para títulos principales).
- **Slots:** La cuadrícula interna de contenedores (Tracker, Shelter, etc.) debe tener una altura fija mínima y un `gap` muy ajustado (ej. `gap-1` o `gap-2`).
