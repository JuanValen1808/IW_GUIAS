# Actividad 11 - Feria Artesanal de Ñuble

* **Estudiante:** Juan Marcos Valenzuela Azócar
* **Proyecto:** Catálogo Web Interactivo en Vue 3 con Vite

---

## 1. Objetivo
Construir un sitio web interactivo y adaptable que integre las directivas de Vue 3 (`v-model`, `v-if`, `v-else`, `v-show`, `v-for`), componentes reutilizables con props y eventos, y propiedades computadas para la selección y filtrado de productos.

---

## 2. Conceptos Aplicados
* **v-model:** Sincronización reactiva del cuadro de búsqueda y la selección de categoría.
* **v-for:** Renderizado dinámico de la grilla de productos y de las opciones de categorías.
* **v-if / v-else:** Despliegue del mensaje de estado vacío ("No se encontraron productos") y control de renderizado del modal.
* **v-show:** Ocultamiento visual eficiente del catálogo dinámico sin destruir su estructura en el DOM.
* **computed:** Cálculo automático del arreglo de categorías únicas y de la lista de productos filtrados.
* **Props y Eventos:** `ProductoCard` recibe los datos del producto y emite `ver-detalle`. `ProductoModal` gestiona su estado con props y emite el evento `close`.

---

## 3. Desafío de Aplicación e Integraciones
* **4° Producto Agregado:** Se incorporó "Greda Negra de Quinchamalí" dentro de `productos.js` bajo la categoría "Artesanía".
* **Reconocimiento Dinámico:** El selector de categoría reconoce automáticamente "Artesanía" gracias a la propiedad computada `categorias`.
* **Mensaje de Catálogo Oculto:** Se añadió un bloque visual destacado con `v-if="!mostrarCatalogo"` indicando al usuario que el catálogo se encuentra temporalmente oculto.

---

## 4. Estructura de Archivos
* `src/App.vue`: Componente principal que coordina el estado general, los filtros y la comunicación entre componentes.
* `src/components/ProductoCard.vue`: Componente hijo para representar cada tarjeta individual de producto.
* `src/components/ProductoModal.vue`: Ventana modal para detallar la información del producto seleccionado.
* `src/data/productos.js`: Fuente de datos local en formato de arreglo de objetos.

---

## 5. Ejecución del Proyecto
```bash
npm install
npm run dev