<!-- filepath: d:\PROYECTO DE GRADO\cba-sucre\frontend_cba\src\App.vue -->
<template>
  <div>
    <nav>
      <router-link to="/sobre-nosotros">Sobre Nosotros</router-link>
      <router-link to="/programas">Programas</router-link>
      <router-link to="/experiencias">Experiencias</router-link>
      <router-link to="/sistema">Sistema</router-link>
    </nav>
    <router-view />
    <BootstrapTest />
  </div>
</template>

<script>
import BootstrapTest from './components/BootstrapTest.vue';

export default {
  name: 'App',
  components: {
    BootstrapTest,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f0f0f0;
}
</style>