<template>
  <div class="page">
    <h1>Contacto</h1>
    <form @submit.prevent class="form-contacto">
      <input placeholder="Nombre" />
      <input placeholder="Correo electrónico" type="email" />
      <textarea placeholder="Mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.form-contacto {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}
input, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>