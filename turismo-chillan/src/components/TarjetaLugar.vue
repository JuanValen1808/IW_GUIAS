<template>
  <div class="tarjeta">
    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
defineProps({
  titulo: String,
  descripcion: String
})
</script>

<style scoped>
.tarjeta {
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.tarjeta h3 {
  color: #8b0000;
  margin-top: 0;
}
</style>