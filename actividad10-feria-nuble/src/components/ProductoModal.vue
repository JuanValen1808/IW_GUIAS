<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  producto: { type: Object, default: null },
  visible: { type: Boolean, required: true }
})

const emit = defineEmits(['close'])

function onkeydown(event) {
  if (props.visible && event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onkeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onkeydown))
</script>

<template>
  <div v-if="visible && producto" class="overlay" @click.self="emit('close')">
    <section class="modal" role="dialog" aria-modal="true">
      <header class="modal_header">
        <div>
          <small>{{ producto.categoria }}</small>
          <h2>{{ producto.nombre }}</h2>
        </div>
        <button class="modal_close" @click="emit('close')" aria-label="Cerrar">
          &times;
        </button>
      </header>
      <img class="modal_img" :src="producto.imagen" :alt="producto.nombre" />
      <div class="modal_content">
        <p>{{ producto.descripcion }}</p>
        <p class="modal_price">
          Precio: ${{ Number(producto.precio).toLocaleString('es-CL') }} CLP
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
}

.modal {
  width: min(680px, 100%);
  overflow: hidden;
  border-radius: 18px;
  background: white;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
}

.modal_header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  padding: 18px;
  border-bottom: 1px solid #e5e7eb;
}

.modal_header h2 { margin: 2px 0 0; }
.modal_header small { color: #64748b; font-weight: 600; }

.modal_close {
  border: 0;
  background: transparent;
  font-size: 2rem;
  line-height: 1;
  color: #475569;
  cursor: pointer;
}

.modal_img { width: 100%; height: 280px; object-fit: cover; }
.modal_content { padding: 18px; }
.modal_content p { line-height: 1.55; }
.modal_price { font-size: 1.1rem; font-weight: 800; color: #1d4ed8; }
</style>