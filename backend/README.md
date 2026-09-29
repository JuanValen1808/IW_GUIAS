# Actividad 9: Primer Backend con Express.js - ÑubleTech Solutions

* **Estudiante:** Juan Marcos Valenzuela Azócar
* **Empresa:** ÑubleTech Solutions (Servicios de TI, Desarrollo Web y Soporte)

---

## Parte 1 y 2 - Preparación del backend
Se creó la carpeta `backend` e inicializó el proyecto de Node.js mediante `npm init -y`, generando el archivo `package.json`. Posteriormente se instaló el framework Express mediante `npm install express`, agregándolo a las dependencias del proyecto.

## Parte 3 y 4 - Primer servidor
Se configuró `server.js`.
* `app.get()`: Define las rutas HTTP para responder a solicitudes GET del cliente.
* `req` (request): Representa la petición recibida con parámetros, encabezados y datos.
* `res` (response): Representa la respuesta enviada por el servidor al cliente.
* `app.listen()`: Inicia el servidor escuchando en el puerto 3000.

## Parte 5 - Datos de servicios
Se creó el archivo `data/servicios.js` con un arreglo de 8 servicios adaptados al rubro TI de ÑubleTech Solutions. Cada objeto incluye `id`, `nombre`, `categoria`, `descripcion`, `precio` y `disponible`. Se utilizó `module.exports` para exportar la información hacia otros archivos.

## Parte 6 - API de servicios
Se creó el endpoint GET `/api/servicios`.
* **Diferencia:** `res.send()` envía respuestas en texto plano o HTML, mientras que `res.json()` formatea y envía datos en formato estructurado JSON.

## Parte 7 - Consulta por ID
Se implementó la ruta `/api/servicios/:id`.
* `req.params`: Captura los valores dinámicos definidos en la URL.
* `Number()`: Convierte el parámetro de texto recibido a tipo numérico para compararlo con el ID.
* **Estado 404:** Representa el código de estado HTTP "Not Found" cuando el recurso buscado no existe.

## Parte 8 - Filtro por categoría
Se adaptó `/api/servicios` para capturar `req.query.categoria`.
* **Diferencia:** `req.params` forma parte fija de la estructura de la ruta (p. ej. `/api/servicios/2`), mientras que `req.query` captura parámetros opcionales enviados tras el signo `?` (p. ej. `/api/servicios?categoria=Soporte`).

## Parte 9 - Middleware JSON
Se incorporó `app.use(express.json())`. Este middleware analiza el cuerpo de las peticiones en formato JSON entrantes para que el servidor pueda procesar datos enviados vía POST/PUT en las siguientes actividades.

## Parte 12 - Pruebas finales
1. **Inicio del servidor:** Ejecución con `node server.js` exitosa en puerto 3000.
2. **Ruta raíz (`/`):** Retorna "Servidor de ÑubleTech Solutions funcionando correctamente".
3. **Consulta general (`GET /api/servicios`):** Retorna la lista completa de los 8 servicios en formato JSON.
4. **Consulta por ID existente (`GET /api/servicios/1`):** Devuelve los detalles de "Desarrollo Web SPA".
5. **Consulta por ID inexistente (`GET /api/servicios/999`):** Retorna código status 404 y JSON `{ "mensaje": "Servicio no encontrado" }`.
6. **Filtro por categoría (`GET /api/servicios?categoria=Soporte`):** Filtra adecuadamente devolviendo solo los servicios de soporte.
7. **Filtro inexistente (`GET /api/servicios?categoria=Fantasía`):** Devuelve un arreglo vacío `[]` con status 200 sin caer el servidor.

---

## Instrucciones para ejecutar el backend
1. Navegar a la carpeta del backend: `cd backend`
2. Instalar dependencias: `npm install`
3. Ejecutar el servidor: `node server.js`
4. Probar endpoints en el navegador: `http://localhost:3000/api/servicios`

---

## Reflexión final
Construir un backend con Express.js permite separar las responsabilidades de una aplicación. El servidor administra los datos centrales, validaciones y lógica de negocio, lo que permitirá a la interfaz del frontend consumir endpoints mediante JSON sin depender de arreglos locales de datos estáticos.