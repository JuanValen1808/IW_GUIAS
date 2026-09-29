# Actividad 10: Backend con NestJS - Emprendedores de Ñuble

* **Estudiante:** Juan Marcos Valenzuela Azócar
* **Proyecto:** Plataforma de Emprendedores Locales de Ñuble

---

## 1. Requisitos y Ejecución
1. Tener una instancia de MySQL en ejecución y crear la base de datos:
   `CREATE DATABASE emprendedores_db;`
2. Configurar el archivo `.env` tomando como base `.env.example`.
3. Instalar dependencias: `npm install`
4. Poblar datos iniciales: `npm run seed`
5. Ejecutar servidor de desarrollo: `npm run start:dev`
6. Acceder a Swagger: `http://localhost:3000/api`

---

## 2. Endpoints Disponibles
* `GET /emprendedores`: Lista completa de emprendedores (200).
* `GET /emprendedores/:id`: Detalle de emprendedor por ID (200 / 404 si no existe).
* `GET /emprendedores/buscar?comuna=&rubro=`: Búsqueda filtrada por comuna y/o rubro.
* `POST /emprendedores`: Crear un nuevo emprendedor (201 / 400 por validación).
* `PUT /emprendedores/:id`: Actualizar datos de un emprendedor (200 / 400 / 404).
* `DELETE /emprendedores/:id`: Eliminar un emprendedor (200 / 404).

---

## 3. Decisiones Técnicas
* **Arquitectura Modular:** Se utilizó el patrón de arquitectura de NestJS organizando el código en Módulo, Controlador, Servicio y Entidad.
* **Validación con DTOs y Pipe Global:** Se implementó `ValidationPipe` global con `whitelist: true` y `forbidNonWhitelisted: true`, asegurando que los datos de entrada cumplan estrictamente las reglas de negocio (mínimo de caracteres, enums de rubros, etc.).
* **TypeORM + MySQL:** Mapeo objeto-relacional para la persistencia de datos relacionales en MySQL con sincronización en desarrollo.
* **Swagger Documentation:** Documentación interactiva en `/api` enriquecida con decoradores `@ApiProperty` en los DTOs.