<template>
  <div class="padre">
    <h2>Componente Padre</h2>
    <Hijo mensaje="Hola desde el padre" />
  </div>
</template>

<script setup>
import Hijo from './Hijo.vue'
</script>

<style scoped>
.padre {
  padding: 20px;
  border: 1px solid #2c3e50;
}
</style>