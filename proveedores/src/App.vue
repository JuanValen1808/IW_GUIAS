<template>
  <div class="container">
    <h1>Recepción de Textos Escolares</h1>

    <div class="menu">
      <button :class="{ active: tab === 'recepciones' }" @click="tab = 'recepciones'">Recepciones</button>
      <button :class="{ active: tab === 'libros' }" @click="tab = 'libros'">Libros</button>
      <button :class="{ active: tab === 'proveedores' }" @click="tab = 'proveedores'">Proveedores</button>
    </div>

    <Recepciones v-if="tab === 'recepciones'" />
    <Libros v-if="tab === 'libros'" />
    <Proveedores v-if="tab === 'proveedores'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Proveedores from './components/Proveedores.vue'
import Libros from './components/Libros.vue'
import Recepciones from './components/Recepciones.vue'

const tab = ref('recepciones')
</script>

<style scoped>
.container { max-width: 900px; margin: 20px auto; font-family: sans-serif; }
.menu { display: flex; gap: 10px; margin-bottom: 20px; }
button { padding: 8px 16px; cursor: pointer; }
button.active { background-color: #2563eb; color: white; border: none; font-weight: bold; }
</style>