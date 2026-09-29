<template>
  <button @click="$emit('saludo')">Enviar saludo</button>
</template>

<script>
export default {
  name: 'HijoBoton'
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #33a06f;
}
</style>