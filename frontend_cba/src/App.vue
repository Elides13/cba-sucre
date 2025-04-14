<template>
  <div>
    <nav>
      <router-link to="/sobre-nosotros">Sobre Nosotros</router-link>
      <router-link to="/programas">Programas</router-link>
      <router-link to="/experiencias"s>Experiencias</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f0f0f0;
}
</style>
<script setup lang="ts">
import '@/assets/css/style.css';
</script>

