# Regla de Diseño: Estilos internos de Modales
- **Contenedores:** Todo el contenido dentro de un Modal (debajo del header y arriba del footer) debe tener un contenedor envolvente con padding lateral (ej. `px-6` o `px-8` en Tailwind) para evitar que los inputs choquen con los bordes.
- **Inputs y Selects:** Deben respetar el ancho de su contenedor padre (`w-full` está bien siempre y cuando el padre tenga padding). Usar bordes redondeados (`rounded-md` o `rounded-lg`).
- **Labels:** Los textos descriptivos de los inputs deben ser sutiles (ej. `text-sm`, `text-gray-500`, font-normal o medium, NO black/extrabold).
