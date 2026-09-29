<template>
  <div class="tarjeta" :class="{ 'no-disponible': !servicio.disponible }">
    <span class="categoria">{{ servicio.categoria }}</span>
    <h3>{{ servicio.nombre }}</h3>
    <p>{{ servicio.descripcion }}</p>
    <p class="precio">Valor ref: ${{ servicio.precio.toLocaleString('es-CL') }}</p>
    
    <span v-if="servicio.disponible" class="badge ok">Disponible</span>
    <span v-else class="badge no-ok">Agotado / No disponible</span>

    <button 
      v-if="servicio.disponible" 
      @click="$emit('solicitar', servicio.nombre)" 
      class="btn-solicitar">
      Me interesa
    </button>
  </div>
</template>

<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

defineEmits(['solicitar'])
</script>

<style scoped>
.tarjeta {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.categoria { font-size: 0.8rem; color: #2563eb; font-weight: bold; text-transform: uppercase; }
h3 { margin: 8px 0; color: #1e293b; }
.precio { font-weight: bold; color: #059669; }
.badge { display: inline-block; padding: 4px 8px; font-size: 0.75rem; border-radius: 4px; margin-bottom: 10px; width: fit-content; }
.ok { background: #dcfce7; color: #166534; }
.no-ok { background: #fee2e2; color: #991b1b; }
.btn-solicitar { background: #2563eb; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; }
.btn-solicitar:hover { background: #1d4ed8; }
</style>