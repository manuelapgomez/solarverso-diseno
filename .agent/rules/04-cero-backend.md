# Regla: Prototipo Cero Backend (Mock Data Only)
1. Este proyecto es estrictamente un prototipo Frontend.
2. NUNCA intentes instalar, configurar o sugerir bases de datos (SQL, Mongo, Firebase, etc.).
3. NUNCA escribas funciones `fetch`, `axios` o llamadas a APIs reales.
4. Absolutamente todos los componentes UI deben alimentarse de la data estática quemada en `/src/data/mockLogistica.ts`.
5. Si necesitas simular interacciones (como mover un equipo de un barco a una MGS), hazlo mutando el estado local en React (ej. `useState` o Context API) basándote en la data inicial del archivo mock.
