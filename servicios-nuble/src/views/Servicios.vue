<template>
  <div class="page">
    <h1>Catálogo de Servicios</h1>
    
    <div class="filtros">
      <input v-model="busqueda" placeholder="Buscar por nombre..." />
      <select v-model="categoriaSeleccionada">
        <option value="">Todas las categorías</option>
        <option value="Desarrollo">Desarrollo</option>
        <option value="Soporte">Soporte</option>
        <option value="Infraestructura">Infraestructura</option>
        <option value="Asesoría">Asesoría</option>
        <option value="Capacitación">Capacitación</option>
      </select>
    </div>

    <p v-if="servicioSeleccionadoLocal" class="alerta-seleccion">
      Seleccionaste: <strong>{{ servicioSeleccionadoLocal }}</strong>. <router-link to="/contacto">Ir al formulario de contacto</router-link>
    </p>

    <div v-if="serviciosFiltrados.length > 0" class="grid">
      <TarjetaServicio 
        v-for="s in serviciosFiltrados" 
        :key="s.id" 
        :servicio="s" 
        @solicitar="manejarSolicitud" 
      />
    </div>
    <p v-else class="sin-resultados">No se encontraron servicios que coincidan con la búsqueda.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useServiciosStore } from '../stores/useServiciosStore.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const { state } = useServiciosStore()
const router = useRouter()

const busqueda = ref('')
const categoriaSeleccionada = ref('')
const servicioSeleccionadoLocal = ref('')

const serviciosFiltrados = computed(() => {
  return state.servicios.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || s.categoria === categoriaSeleccionada.value
    return coincideNombre && coincideCategoria
  })
})

function manejarSolicitud(nombreServicio) {
  state.servicioSeleccionado = nombreServicio
  servicioSeleccionadoLocal.value = nombreServicio
}
</script>

<style scoped>
.filtros { display: flex; gap: 10px; margin-bottom: 20px; }
.filtros input, .filtros select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; flex: 1; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
.alerta-seleccion { background: #e0f2fe; color: #0369a1; padding: 10px; border-radius: 6px; }
.sin-resultados { color: #64748b; font-style: italic; }
</style>