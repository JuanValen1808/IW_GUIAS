<template>
  <nav class="navbar">
    <div class="logo">ÑubleTech Solutions</div>
    <div class="links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/servicios">Servicios</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e293b;
  padding: 1rem 2rem;
  color: white;
}
.logo { font-size: 1.2rem; font-weight: bold; color: #38bdf8; }
.links a { color: white; text-decoration: none; margin-left: 15px; }
.links a.router-link-active { border-bottom: 2px solid #38bdf8; font-weight: bold; color: #38bdf8; }
</style>