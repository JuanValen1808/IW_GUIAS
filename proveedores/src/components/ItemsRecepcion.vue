<template>
  <div class="card" v-if="idRecepcion">
    <h3>Detalle recepción #{{ idRecepcion }}</h3>

    <form @submit.prevent="agregar">
      <select v-model="form.id_libro" required>
        <option value="">-- Seleccionar Libro --</option>
        <option v-for="l in state.libros" :key="l.id" :value="l.id">{{ l.titulo }}</option>
      </select>
      <input type="number" v-model.number="form.cantidad" min="1" placeholder="Cantidad" required />
      <select v-model="form.estado">
        <option value="correcto">Correcto</option>
        <option value="dañado">Dañado</option>
        <option value="mixto">Mixto</option>
      </select>
      <input v-model="form.observacion" placeholder="Observación" />
      <button type="submit">Agregar ítem</button>
    </form>

    <ul>
      <li v-for="it in items" :key="it.id">
        {{ obtenerTituloLibro(it.id_libro) }} — Cantidad: {{ it.cantidad }} — Estado: {{ it.estado }} — {{ it.observacion }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

const props = defineProps({
  idRecepcion: { type: Number, required: false }
})

const { state } = useRecepcionStore()

const form = ref({ id_libro: '', cantidad: 1, estado: 'correcto', observacion: '' })

// Filtramos solo los ítems que pertenecen a esta recepción
const items = computed(() => {
  return state.items.filter(it => it.id_recepcion === props.idRecepcion)
})

function obtenerTituloLibro(id) {
  const libro = state.libros.find(l => l.id === Number(id))
  return libro ? libro.titulo : `Libro #${id}`
}

function agregar() {
  if (!form.value.id_libro || !form.value.cantidad) return

  state.items.push({
    id: Date.now(),
    id_recepcion: props.idRecepcion,
    id_libro: Number(form.value.id_libro),
    cantidad: Number(form.value.cantidad),
    estado: form.value.estado,
    observacion: form.value.observacion
  })

  form.value = { id_libro: '', cantidad: 1, estado: 'correcto', observacion: '' }
}
</script>

<style scoped>
.card { border: 1px solid #ccc; padding: 15px; margin-top: 15px; border-radius: 6px; }
</style>