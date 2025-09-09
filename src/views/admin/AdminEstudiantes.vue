<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios' // Tu axios configurado con token

interface Estudiante {
  id: number
  ci: number
  nombres: string
  apellidos: string
  telefono: string
}

// Lista de estudiantes
const estudiantes = ref<Estudiante[]>([])

// Nuevo estudiante
const nuevoEstudiante = ref<Partial<Estudiante>>({})

// Función para cargar estudiantes desde backend
const cargarEstudiantes = async () => {
  try {
    const { data } = await axios.get('/estudiantes')
    estudiantes.value = data
  } catch (error) {
    console.error('Error al cargar estudiantes:', error)
  }
}

// Función para agregar estudiante
const agregarEstudiante = async () => {
  if (!nuevoEstudiante.value.ci || !nuevoEstudiante.value.nombres) {
    alert('CI y nombres son obligatorios')
    return
  }
  try {
    const { data } = await axios.post('/estudiantes', nuevoEstudiante.value)
    estudiantes.value.push(data)
    nuevoEstudiante.value = {}
  } catch (error) {
    console.error('Error al agregar estudiante:', error)
  }
}

// Función para eliminar estudiante
const eliminarEstudiante = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar este estudiante?')) return
  try {
    await axios.delete(`/estudiantes/${id}`)
    estudiantes.value = estudiantes.value.filter(e => e.id !== id)
  } catch (error) {
    console.error('Error al eliminar estudiante:', error)
  }
}

// Cargar estudiantes al montar
onMounted(cargarEstudiantes)
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">Administrar Estudiantes</h1>

    <!-- Formulario Crear -->
    <div class="mb-4 row g-2">
      <div class="col-md-2">
        <input v-model="nuevoEstudiante.ci" type="number" placeholder="CI" class="form-control"/>
      </div>
      <div class="col-md-3">
        <input v-model="nuevoEstudiante.nombres" placeholder="Nombres" class="form-control"/>
      </div>
      <div class="col-md-3">
        <input v-model="nuevoEstudiante.apellidos" placeholder="Apellidos" class="form-control"/>
      </div>
      <div class="col-md-3">
        <input v-model="nuevoEstudiante.telefono" placeholder="Teléfono" class="form-control"/>
      </div>
      <div class="col-md-1">
        <button @click="agregarEstudiante" class="btn btn-primary w-100">Agregar</button>
      </div>
    </div>

    <!-- Tabla de Estudiantes -->
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>CI</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="est in estudiantes" :key="est.id">
          <td>{{ est.ci }}</td>
          <td>{{ est.nombres }}</td>
          <td>{{ est.apellidos }}</td>
          <td>{{ est.telefono }}</td>
          <td>
            <button @click="eliminarEstudiante(est.id)" class="btn btn-danger btn-sm">
              Eliminar
            </button>
          </td>
        </tr>
        <tr v-if="estudiantes.length === 0">
          <td colspan="5" class="text-center">No hay estudiantes registrados</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Opcional: puedes agregar estilos propios */
</style>
