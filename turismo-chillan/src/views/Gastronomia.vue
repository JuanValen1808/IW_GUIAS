<template>
  <div class="page">
    <h1>Gastronomía Local</h1>
    <div class="grid">
      <TarjetaLugar titulo="Longanizas de Chillán" descripcion="El producto gastronómico más célebre de la zona." />
      <TarjetaLugar titulo="Pan Amasado" descripcion="Tradición culinaria de los campos de la Región del Ñuble." />
      <TarjetaLugar titulo="Vinos del Valle del Itata" descripcion="Cepa histórica con producción vitivinícola ancestral." />
    </div>
  </div>
</template>

<script setup>
import TarjetaLugar from '../components/TarjetaLugar.vue'
</script>