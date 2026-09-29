<template>
  <div>
    <h2>Proveedores</h2>
    <form @submit.prevent="guardar">
      <input v-model="form.nombre" placeholder="Nombre Editorial / Proveedor" required />
      <input v-model="form.rut" placeholder="RUT" required />
      <input v-model="form.contacto" placeholder="Correo / Teléfono" required />
      <button type="submit">Agregar Proveedor</button>
    </form>

    <ul>
      <li v-for="p in state.proveedores" :key="p.id">
        <strong>{{ p.nombre }}</strong> - RUT: {{ p.rut }} - Contacto: {{ p.contacto }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

const { state } = useRecepcionStore()

const form = ref({ nombre: '', rut: '', contacto: '' })

function guardar() {
  if (!form.value.nombre || !form.value.rut) return
  state.proveedores.push({ id: Date.now(), ...form.value })
  form.value = { nombre: '', rut: '', contacto: '' }
}
</script>