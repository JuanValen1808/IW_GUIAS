# Actividad 8: Prototipo Web para Empresa de Servicios TI (ÑubleTech Solutions)

## Parte 1 - Reutilización del proyecto
Se tomó como base la arquitectura modular de la Actividad 7. Se conservó el estado reactivo centralizado con `reactive` (`stores`), la interacción entre componentes padre e hijo, y la estructura de formularios validados. Se eliminaron los módulos de libros y recepciones escolares, adaptándolos a una empresa de servicios de soporte informático y desarrollo web llamada **ÑubleTech Solutions**.

## Parte 2 - Navegación y vistas
Se implementó una SPA mediante `Vue Router` con 4 vistas principales:
* `Inicio`: Presentación inicial de la empresa.
* `Nosotros`: Explicación del propósito y valores de la empresa.
* `Servicios`: Catálogo interactivo de servicios tecnológicos.
* `Contacto`: Formulario dinámico para solicitar cotizaciones.

## Parte 3 - Catálogo y componentes de servicios
Se estructuró un arreglo de 6 servicios en el store compartido con nombre, categoría, descripción, precio y disponibilidad. Se creó el componente reutilizable `TarjetaServicio.vue`, el cual recibe la información de cada servicio desde la vista padre mediante `props`.

## Parte 4 - Filtros e interacción de servicios
Se agregó un buscador en tiempo real por texto y un filtro desplegable por categoría usando `v-model` y propiedades calculadas (`computed`). La comunicación desde el hijo hacia el padre se realiza mediante `$emit('solicitar')`, guardando el servicio seleccionado para el formulario de contacto.

## Parte 5 - Formulario de contacto
El formulario incluye validación de campos obligatorios (nombre, correo, teléfono, servicio de interés y mensaje). Si el usuario presionó "Me interesa" en el catálogo, el servicio correspondiente se precarga automáticamente en la lista desplegable del formulario.

## Parte 6 - Diseño y revisión final
Se unificó la paleta de colores corporativa (tonos azul y pizarra) dando coherencia a la interfaz. Se verificó el correcto funcionamiento de las rutas, respuestas de filtros y ausencia de errores en la consola.
EOF