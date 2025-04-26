<template>
  <div class="container">
    <h1>Experiencia</h1>
    <ul>
      <li v-for="exp in experiencias" :key="exp.id">
        <h3>{{ exp.titulo }}</h3>
        <p>{{ exp.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      experiencias: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/experiencia');
      this.experiencias = response.data;
    } catch (error) {
      console.error('Error al obtener experiencias:', error);
    }
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
h1 {
  color: #ff5733;
}
</style>
