import { reactive } from 'vue'

const state = reactive({
  proveedores: [
    { id: 1, nombre: 'Editorial Santillana', rut: '76.123.456-7', contacto: 'soporte@santillana.cl' }
  ],
  libros: [
    { id: 1, isbn: '9789561234560', titulo: 'Matemática 5° Básico', editorial: 'Santillana', nivel: 'Básica', anio: 2024 }
  ],
  recepciones: [
    { id: 1, fecha: '2025-09-01', nro_guia: 'G-55421', id_proveedor: 1 }
  ],
  items: [
    { id: 1, id_recepcion: 1, id_libro: 1, cantidad: 450, estado: 'mixto', observacion: '5 libros arrugados' }
  ]
})

export function useRecepcionStore() {
  return { state }
}