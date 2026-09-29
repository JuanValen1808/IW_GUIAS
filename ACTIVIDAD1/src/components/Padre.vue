<template>
  <div class="padre">
    <h2>Comunicación Hijo -> Padre</h2>
    <HijoBoton @saludo="mostrarSaludo" />
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HijoBoton from './HijoBoton.vue'

const mensaje = ref('')

const mostrarSaludo = () => {
  mensaje.value = 'Hola desde el hijo'
}
</script>

<style scoped>
.padre {
  padding: 20px;
  border: 1px solid #2c3e50;
  border-radius: 8px;
}
p {
  margin-top: 15px;
  font-weight: bold;
  color: #2c3e50;
}
</style>