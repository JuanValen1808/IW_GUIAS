import { reactive } from 'vue'

const state = reactive({
  servicioSeleccionado: '',
  servicios: [
    { id: 1, nombre: 'Desarrollo Web SPA', categoria: 'Desarrollo', descripcion: 'Creación de sitios web modernos y dinámicos en Vue 3.', precio: 250000, disponible: true },
    { id: 2, nombre: 'Soporte Técnico Informático', categoria: 'Soporte', descripcion: 'Mantenimiento preventivo y correctivo de equipos.', precio: 45000, disponible: true },
    { id: 3, nombre: 'Instalación de Redes y WiFi', categoria: 'Infraestructura', descripcion: 'Cableado estructurado y configuración de redes Pyme.', precio: 120000, disponible: true },
    { id: 4, nombre: 'Consultoría en Ciberseguridad', categoria: 'Asesoría', descripcion: 'Auditoría básica de seguridad y respaldo de datos.', precio: 180000, disponible: false },
    { id: 5, nombre: 'Migración a la Nube', categoria: 'Infraestructura', descripcion: 'Configuración de servidores y almacenamiento cloud.', precio: 210000, disponible: true },
    { id: 6, nombre: 'Capacitación en Software', categoria: 'Capacitación', descripcion: 'Talleres de herramientas digitales para equipos de trabajo.', precio: 80000, disponible: true }
  ]
})

export function useServiciosStore() {
  return { state }
}