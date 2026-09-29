<template>
  <div class="page">
    <h1>Contacto y Cotizaciones</h1>

    <form @submit.prevent="enviarFormulario" class="form-contacto">
      <input v-model="form.nombre" placeholder="Nombre completo" />
      <input v-model="form.correo" type="email" placeholder="Correo electrónico" />
      <input v-model="form.telefono" placeholder="Teléfono de contacto" />
      
      <select v-model="form.servicio">
        <option value="">-- Seleccione servicio de interés --</option>
        <option v-for="s in state.servicios" :key="s.id" :value="s.nombre">{{ s.nombre }}</option>
      </select>

      <textarea v-model="form.mensaje" placeholder="Mensaje o detalle de la consulta"></textarea>

      <button type="submit">Enviar Solicitud</button>
    </form>

    <p v-if="error" class="msg-error">{{ error }}</p>

    <div v-if="enviado" class="resumen">
      <h3>¡Solicitud Enviada con Éxito!</h3>
      <p><strong>Nombre:</strong> {{ resumen.nombre }}</p>
      <p><strong>Correo:</strong> {{ resumen.correo }}</p>
      <p><strong>Teléfono:</strong> {{ resumen.telefono }}</p>
      <p><strong>Servicio:</strong> {{ resumen.servicio }}</p>
      <p><strong>Mensaje:</strong> {{ resumen.mensaje }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useServiciosStore } from '../stores/useServiciosStore.js'

const { state } = useServiciosStore()

const form = ref({ nombre: '', correo: '', telefono: '', servicio: '', mensaje: '' })
const error = ref('')
const enviado = ref(false)
const resumen = ref({})

onMounted(() => {
  if (state.servicioSeleccionado) {
    form.value.servicio = state.servicioSeleccionado
  }
})

function enviarFormulario() {
  if (!form.value.nombre || !form.value.correo || !form.value.telefono || !form.value.servicio || !form.value.mensaje) {
    error.value = 'Todos los campos son obligatorios. Por favor complete el formulario.'
    enviado.value = false
    return
  }

  resumen.value = { ...form.value }
  enviado.value = true
  error.value = ''
  
  // Limpiar formulario
  form.value = { nombre: '', correo: '', telefono: '', servicio: '', mensaje: '' }
  state.servicioSeleccionado = ''
}
</script>

<style scoped>
.form-contacto { display: flex; flex-direction: column; gap: 12px; max-width: 500px; }
input, select, textarea { padding: 10px; border: 1px solid #ccc; border-radius: 4px; }
textarea { height: 100px; }
button { background: #2563eb; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.msg-error { color: #dc2626; font-weight: bold; margin-top: 10px; }
.resumen { background: #f0fdf4; border: 1px solid #86efac; padding: 15px; border-radius: 6px; margin-top: 15px; }
</style>