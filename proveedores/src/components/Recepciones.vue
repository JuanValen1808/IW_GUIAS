<template>
  <div>
    <h2>Recepciones</h2>

    <form @submit.prevent="guardar">
      <input type="date" v-model="form.fecha" required />
      <input v-model="form.nro_guia" placeholder="N° Guía/Factura" required />
      <select v-model="form.id_proveedor" required>
        <option value="">-- Proveedor --</option>
        <option v-for="p in state.proveedores" :key="p.id" :value="p.id">{{ p.nombre }}</option>
      </select>
      <button type="submit">Agregar Recepción</button>
    </form>

    <table border="1" cellpadding="8" style="margin-top: 15px; width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Proveedor</th>
          <th>N° Guía</th>
          <th>Total Libros</th>
          <th>% Defectuosos</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in state.recepciones" :key="r.id">
          <td>{{ r.id }}</td>
          <td>{{ r.fecha }}</td>
          <td>{{ obtenerNombreProveedor(r.id_proveedor) }}</td>
          <td>{{ r.nro_guia }}</td>
          <td>{{ calcularTotalLibros(r.id) }}</td>
          <td>{{ calcularPorcentajeDefectos(r.id) }}%</td>
          <td>
            <button @click="seleccion = r.id">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ItemsRecepcion :id-recepcion="seleccion" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'
import ItemsRecepcion from './ItemsRecepcion.vue'

const { state } = useRecepcionStore()

const form = ref({ fecha: '', nro_guia: '', id_proveedor: '' })
const seleccion = ref(null)

function guardar() {
  if (!form.value.id_proveedor) {
    alert('Seleccione un proveedor')
    return
  }
  const nueva = {
    id: Date.now(),
    fecha: form.value.fecha,
    nro_guia: form.value.nro_guia,
    id_proveedor: Number(form.value.id_proveedor)
  }
  state.recepciones.push(nueva)
  seleccion.value = nueva.id
  form.value = { fecha: '', nro_guia: '', id_proveedor: '' }
}

function obtenerNombreProveedor(id) {
  const p = state.proveedores.find(prov => prov.id === Number(id))
  return p ? p.nombre : '—'
}

function calcularTotalLibros(idRecepcion) {
  const items = state.items.filter(it => it.id_recepcion === idRecepcion)
  return items.reduce((suma, item) => suma + Number(item.cantidad), 0)
}

function calcularPorcentajeDefectos(idRecepcion) {
  const items = state.items.filter(it => it.id_recepcion === idRecepcion)
  const totalLibros = items.reduce((suma, item) => suma + Number(item.cantidad), 0)
  if (totalLibros === 0) return 0

  const librosDefectuosos = items
    .filter(it => it.estado === 'dañado' || it.estado === 'mixto')
    .reduce((suma, item) => suma + Number(item.cantidad), 0)

  return ((librosDefectuosos / totalLibros) * 100).toFixed(1)
}
</script>