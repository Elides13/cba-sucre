<template>
  <div class="programa-create">
    <h1>Crear Programa</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre del Programa:</label>
        <input
          type="text"
          id="nombre"
          v-model="form.nombre"
          required
        />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          v-model="form.descripcion"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="duracion">Duración (en meses):</label>
        <input
          type="number"
          id="duracion"
          v-model="form.duracion"
          required
        />
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ProgramaCreate',
  setup() {
    const form = ref({
      nombre: '',
      descripcion: '',
      duracion: null,
    });

    const submitForm = () => {
      console.log('Formulario enviado:', form.value);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style scoped>
.programa-create {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style></template>