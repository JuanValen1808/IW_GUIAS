<script setup>
import { ref, computed } from 'vue'
import { productos as baseProductos } from './data/productos'
import ProductoCard from './components/ProductoCard.vue'
import ProductoModal from './components/ProductoModal.vue'

const filtro = ref('')
const categoria = ref('Todas')
const mostrarCatalogo = ref(true)
const seleccionado = ref(null)
const modalVisible = ref(false)

// Categorías calculadas dinámicamente
const categorias = computed(() => [
  'Todas',
  ...new Set(baseProductos.map(producto => producto.categoria))
])

// Lista filtrada por búsqueda en texto y por categoría seleccionada
const listaFiltrada = computed(() => {
  const texto = filtro.value.trim().toLowerCase()
  return baseProductos.filter(producto => {
    const coincideTexto =
      !texto ||
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto)
    const coincideCategoria =
      categoria.value === 'Todas' || producto.categoria === categoria.value
    return coincideTexto && coincideCategoria
  })
})

function verDetalle(producto) {
  seleccionado.value = producto
  modalVisible.value = true
}

function cerrarModal() {
  modalVisible.value = false
  seleccionado.value = null
}
</script>

<template>
  <main class="page">
    <section class="hero">
      <div>
        <p class="eyebrow">Actividad N° 11 - Vue.js</p>
        <h1>Feria Artesanal de Ñuble</h1>
        <p class="hero_text">
          Catálogo digital de productos elaborados por artesanos de las provincias de Diguillín, Punilla e Itata. Practica el enlace de datos y componentes interactivos en Vue 3.
        </p>
      </div>
    </section>

    <section class="toolbar" aria-label="Filtros del catálogo">
      <div class="field field-grow">
        <label for="buscar">Buscar producto</label>
        <input
          id="buscar"
          v-model="filtro"
          type="search"
          placeholder="Ej.: miel, queso, textil, greda..."
        />
      </div>

      <div class="field">
        <label for="categoria">Categoría</label>
        <select id="categoria" v-model="categoria">
          <option v-for="item in categorias" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>

      <button class="toggle" @click="mostrarCatalogo = !mostrarCatalogo">
        {{ mostrarCatalogo ? 'Ocultar catálogo' : 'Mostrar catálogo' }}
      </button>
    </section>

    <!-- Indicador visual del Desafío de Aplicación cuando el catálogo está oculto -->
    <div v-if="!mostrarCatalogo" class="hidden-alert">
      📌 El catálogo de la Feria Artesanal se encuentra actualmente oculto. Presiona el botón <strong>"Mostrar catálogo"</strong> para volver a visualizar las artesanías.
    </div>

    <!-- Catálogo controlado por v-show -->
    <section v-show="mostrarCatalogo" class="catalogo">
      <div class="catalogo_header">
        <h2>Productos disponibles</h2>
        <span>{{ listaFiltrada.length }} resultado(s)</span>
      </div>

      <div v-if="listaFiltrada.length === 0" class="empty">
        <strong>No se encontraron productos.</strong>
        <p>Prueba con otro texto o selecciona una categoría diferente.</p>
      </div>

      <div v-else class="grid">
        <ProductoCard
          v-for="producto in listaFiltrada"
          :key="producto.id"
          :producto="producto"
          @ver-detalle="verDetalle"
        />
      </div>
    </section>

    <ProductoModal
      :producto="seleccionado"
      :visible="modalVisible"
      @close="cerrarModal"
    />

    <footer class="footer">
      Actividad N° 11 - Desarrollo Web Frontend | Juan Marcos Valenzuela Azócar | Universidad Adventista de Chile (2026)
    </footer>
  </main>
</template>

<style scoped>
.page { max-width: 1120px; margin: 0 auto; padding: 28px 20px 40px; }

.hero {
  margin-bottom: 20px;
  padding: 32px;
  border-radius: 22px;
  color: white;
  background: linear-gradient(135deg, #0f3f76, #1d4ed8);
}

.eyebrow { margin: 0 0 8px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; opacity: .85; }
.hero h1 { margin: 0; font-size: clamp(2rem, 5vw, 3.3rem); }
.hero_text { max-width: 760px; margin: 12px 0 0; line-height: 1.6; opacity: .92; }

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: end;
  margin-bottom: 18px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
}

.field { display: grid; gap: 6px; min-width: 190px; }
.field-grow { flex: 1 1 320px; }
.field label { font-size: 0.82rem; font-weight: 800; color: #475569; }

.field input, .field select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: white;
}

.toggle {
  padding: 10px 14px;
  border: 0;
  border-radius: 10px;
  background: #0f172a;
  color: white;
  font-weight: 700;
  transition: background 0.2s;
}

.toggle:hover { background: #1e293b; }

.hidden-alert {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background: #fef3c7;
  border: 1px solid #f59e0b;
  color: #92400e;
  text-align: center;
}

.catalogo { min-height: 280px; }
.catalogo_header { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin: 18px 0 12px; }
.catalogo_header h2 { margin: 0; }
.catalogo_header span { color: #64748b; font-size: 0.9rem; font-weight: 600; }

.grid { display: grid; gap: 16px; grid-template-columns: repeat(1, minmax(0, 1fr)); }
.empty { padding: 32px; text-align: center; border: 1px dashed #94a3b8; border-radius: 14px; background: white; color: #475569; }

.footer { margin-top: 30px; padding-top: 18px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 0.85rem; text-align: center; }

@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 900px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
</style>