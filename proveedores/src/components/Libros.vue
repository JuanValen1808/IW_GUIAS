<template>
  <div>
    <h2>Libros</h2>
    <form @submit.prevent="guardar">
      <input v-model="form.isbn" placeholder="ISBN (10 o 13 dígitos)" />
      <input v-model="form.titulo" placeholder="Título" />
      <input v-model="form.editorial" placeholder="Editorial" />
      <select v-model="form.nivel">
        <option>Básica</option>
        <option>Media</option>
      </select>
      <input v-model.number="form.anio" type="number" placeholder="Año" />
      <button type="submit">Agregar</button>
    </form>

    <ul>
      <li v-for="l in state.libros" :key="l.id">
        {{ l.titulo }} - ISBN: {{ l.isbn }} - {{ l.nivel }} ({{ l.anio }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

const { state } = useRecepcionStore()

const form = ref({ isbn: '', titulo: '', editorial: '', nivel: 'Básica', anio: 2025 })

function guardar() {
  // Limpiamos guiones por si el usuario escribe con guión
  const isbnLimpio = form.value.isbn.replace(/-/g, '')

  // Se permite que tenga exactamente 10 o 13 caracteres
  if (isbnLimpio.length !== 10 && isbnLimpio.length !== 13) {
    alert('El ISBN debe tener exactamente 10 o 13 dígitos')
    return
  }

  state.libros.push({ id: Date.now(), ...form.value })
  form.value = { isbn: '', titulo: '', editorial: '', nivel: 'Básica', anio: 2025 }
}
</script>