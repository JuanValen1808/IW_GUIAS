<template>
  <div class="contacto-container">
    <h2>Formulario de Contacto</h2>
    <form @submit.prevent="validarFormulario">
      <input v-model="nombre" placeholder="Nombre" />
      <input v-model="correo" placeholder="Correo" />
      <input v-model="telefono" placeholder="Teléfono" />
      <textarea v-model="mensaje" placeholder="Mensaje"></textarea>
      <label>
        <input type="checkbox" v-model="newsletter" />
        Suscribirse al boletín
      </label>
      <button type="submit">Enviar</button>
    </form>

    <div v-if="error" style="color:red">{{ error }}</div>

    <div v-if="enviado">
      <h3>Datos enviados:</h3>
      <p><strong>Nombre:</strong> {{ nombre }}</p>
      <p><strong>Correo:</strong> {{ correo }}</p>
      <p><strong>Teléfono:</strong> {{ telefono }}</p>
      <p><strong>Mensaje:</strong> {{ mensaje }}</p>
      <p><strong>Boletín:</strong> {{ newsletter ? 'Sí' : 'No' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: '',
      newsletter: false,
      enviado: false,
      error: ''
    }
  },
  methods: {
    validarFormulario() {
      if (!this.nombre || !this.correo || !this.telefono || !this.mensaje) {
        this.error = 'Todos los campos son obligatorios';
        this.enviado = false;
        return;
      }
      this.enviado = true;
      this.error = '';
    }
  }
}
</script>

<style scoped>
.contacto-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.field {
  margin-bottom: 12px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
textarea {
  height: 80px;
}
.checkbox {
  text-align: left;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error-msg {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
.resultado {
  margin-top: 20px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
  text-align: left;
}
</style>