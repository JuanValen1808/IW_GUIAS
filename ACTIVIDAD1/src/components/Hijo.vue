<template>
  <div class="hijo">
    <p>{{ mensaje }}</p>
  </div>
</template>

<script setup>
defineProps({
  mensaje: String
})
</script>

<style scoped>
.hijo {
  padding: 10px;
  border: 1px dashed #42b883;
  margin-top: 10px;
}
</style>