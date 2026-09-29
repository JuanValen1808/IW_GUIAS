<template>
  <div class="container">
    <h1>Lista de Personas</h1>

    <div class="formulario">
      <input v-model="nuevoNombre" placeholder="Nombre" />
      <input v-model="nuevoApellido" placeholder="Apellido" />
    </div>

    <div class="botones">
      <button @click="show = !show">
        {{ show ? 'Ocultar' : 'Mostrar' }} Lista
      </button>
      <button @click="agregarPersona">Agregar Persona</button>
    </div>

    <ul v-if="show && list.length" class="lista">
      <li v-for="(persona, index) in list" :key="index">
        {{ persona.nombre }} {{ persona.apellido }}
        <button class="eliminar" @click="eliminarPersona(index)">Eliminar</button>
      </li>
    </ul>

    <p v-else-if="list.length">La lista no está vacía, pero está oculta.</p>
    <p v-else>La lista está vacía.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
const nuevoNombre = ref('')
const nuevoApellido = ref('')

const list = ref([
  { nombre: 'Ana', apellido: 'Pérez' },
  { nombre: 'Luis', apellido: 'Gómez' },
  { nombre: 'Maria', apellido: 'Rodriguez' }
])

function agregarPersona() {
  if (nuevoNombre.value.trim() && nuevoApellido.value.trim()) {
    list.value.push({ 
      nombre: nuevoNombre.value, 
      apellido: nuevoApellido.value 
    })
    nuevoNombre.value = ''
    nuevoApellido.value = ''
  } else {
    // Si están vacíos, agrega un usuario por defecto
    list.value.push({ nombre: 'Nuevo', apellido: 'Usuario' })
  }
}

function eliminarPersona(index) {
  list.value.splice(index, 1)
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.formulario {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.formulario input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #125ea5;
}

.lista {
  list-style-type: none;
  padding: 0;
}

.lista li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.eliminar {
  background-color: #e53935;
}

.eliminar:hover {
  background-color: #b71c1c;
}
</style>