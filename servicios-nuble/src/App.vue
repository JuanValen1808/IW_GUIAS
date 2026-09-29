<template>
  <div id="app-container">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
body { margin: 0; font-family: system-ui, sans-serif; background-color: #f8fafc; color: #334155; }
.main-content { max-width: 900px; margin: 20px auto; padding: 0 15px; }
</style>