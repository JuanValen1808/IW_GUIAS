# Actividad 7: Diagnóstico y Corrección de Aplicación Vue 3

## Diagnóstico inicial (5 problemas encontrados)
1. **Problema en navegación:** En `App.vue`, el botón de recepciones comparaba la pestaña activa con la palabra `recepcióne` (con tilde y una 'e' extra).
2. **Componente no encontrado:** En `App.vue`, la etiqueta para cargar libros estaba escrita como `<Libross />` con doble 's'.
3. **Estado no compartido:** En `useRecepcionStore.js`, la función `useRecepcionStore()` no devolvía el objeto `{ state }`, por lo que los componentes no podían leer la información.
4. **Validación de ISBN equivocada:** En `Libros.vue`, la condición para validar el ISBN usaba `&&` (y) en lugar de un filtro que permitiera exactitud de 10 o 13 caracteres.
5. **Nombre de campo erróneo:** En `Libros.vue` se guardaba el año como `anio_publicacion`, pero en el almacén de datos la propiedad se llamaba `anio`.

---

## Corrección de la aplicación principal (Navegación)
* **Error:** Al hacer clic en los botones de la barra superior, no cambiaban de color ni mostraban los componentes correctos.
* **Solución:** Se corrigió la palabra escrita en la condición del botón en `App.vue` para que diga `recepciones` y se arregló la etiqueta del componente `<Libros />`.

---

## Almacenamiento compartido
* **Error:** La función del archivo de almacenamiento estaba vacía (`return {}`), impidiendo que las pantallas leyeran los proveedores, libros y recepciones.
* **Solución:** Se configuró para retornar `{ state }`, permitiendo que todos los componentes modifiquen y lean los mismos datos guardados en memoria.

---

## Gestión de libros
* **Error:** Se podía guardar un libro con cualquier cantidad de letras o números en el ISBN y el año no se mostraba en la lista porque el campo tenía nombres distintos.
* **Solución:** Se corrigió la lógica para que el ISBN obligatoriamente tenga 10 o 13 números y se unificó el nombre del dato del año a `anio`.

---

## Gestión de recepciones
* **Error:** No se obligaba a elegir un proveedor antes de guardar y no se conectaba el identificador del proveedor con la lista.
* **Solución:** Se agregó la validación del proveedor y se vincularon los datos seleccionados en el formulario.

---

## Detalle de recepción
* **Error:** En el detalle de libros de una recepción, se buscaba por un dato escrito como `id_reception` (en inglés) en lugar de `id_recepcion` (en español). Tampoco se convertía el número a formato numérico.
* **Solución:** Se alineó el nombre de la variable a `id_recepcion` y se envolvió la cantidad ingresada para asegurar que guarde como un número.

---

## Cálculos de recepción
* **Error:** En la tabla aparecían números en 0 o errores como `NaN%`.
* **Solución:** Se sumaron las cantidades reales de cada libro agregado y se calculó el porcentaje de libros dañados o mixtos sobre el total.