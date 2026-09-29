<template>
  <nav class="navbar">
    <div class="logo">Turismo Chillán</div>
    <div class="links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/atractivos">Atractivos</router-link>
      <router-link to="/gastronomia">Gastronomía</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8b0000;
  padding: 1rem 2rem;
  color: white;
}
.logo {
  font-size: 1.2rem;
  font-weight: bold;
}
.links a {
  color: white;
  text-decoration: none;
  margin-left: 15px;
  font-weight: 500;
}
.links a.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>