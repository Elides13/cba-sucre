<!-- filepath: d:\PROYECTO DE GRADO\cba-sucre\frontend_cba\src\views\Programas.vue -->
<template>
  <div class="container">
    <h1>Nuestros Programas</h1>
    <ul>
      <li v-for="programa in programas" :key="programa.id">
        {{ programa.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Programas',
  data() {
    return {
      programas: [
        { id: 1, nombre: 'Programa de Inglés para niños' },
        { id: 2, nombre: 'Programa de Inglés para adultos' },
        { id: 3, nombre: 'Inglés para negocios' },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}
h1 {
  color: #28a745;
}
ul {
  list-style-type: square;
}
</style>