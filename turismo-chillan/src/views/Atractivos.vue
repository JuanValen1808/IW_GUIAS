<template>
  <div class="page">
    <h1>Atractivos Turísticos</h1>
    <div class="grid">
      <TarjetaLugar titulo="Catedral de Chillán" descripcion="Icono arquitectónico de la ciudad reconstruido tras el terremoto de 1939." />
      <TarjetaLugar titulo="Termas de Chillán" descripcion="Centro de esquí y aguas termales ubicado en la cordillera de los Andes." />
      <TarjetaLugar titulo="Valle Las Trancas" descripcion="Hermoso entorno natural rodeado de bosques y montañas." />
      <TarjetaLugar titulo="Feria de Chillán" descripcion="Centro artesanal y gastronómico tradicional de la región." />
    </div>
  </div>
</template>

<script setup>
import TarjetaLugar from '../components/TarjetaLugar.vue'
</script>