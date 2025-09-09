<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios'

interface Docente {
  id: number
  ci: number
  nombres: string
  apellidos: string
  telefono: string
  materia?: string
}

const docentes = ref<Docente[]>([])
const nuevoDocente = ref<Partial<Docente>>({})

const cargarDocentes = async () => {
  try {
    const { data } = await axios.get('/docentes')
    docentes.value = data
  } catch (error) {
    console.error(error)
  }
}

const agregarDocente = async () => {
  try {
    const { data } = await axios.post('/docentes', nuevoDocente.value)
    docentes.value.push(data)
    nuevoDocente.value = {}
  } catch (error) {
    console.error(error)
  }
}

const eliminarDocente = async (id: number) => {
  try {
    await axios.delete(`/docentes/${id}`)
    docentes.value = docentes.value.filter(d => d.id !== id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(cargarDocentes)
</script>

<template>
  <div class="container py-4">
    <h2>Administrar Docentes</h2>
    <div class="mb-4">
      <input v-model="nuevoDocente.ci" placeholder="CI" class="form-control mb-2"/>
      <input v-model="nuevoDocente.nombres" placeholder="Nombres" class="form-control mb-2"/>
      <input v-model="nuevoDocente.apellidos" placeholder="Apellidos" class="form-control mb-2"/>
      <input v-model="nuevoDocente.telefono" placeholder="Teléfono" class="form-control mb-2"/>
      <input v-model="nuevoDocente.materia" placeholder="Materia" class="form-control mb-2"/>
      <button @click="agregarDocente" class="btn btn-primary">Agregar</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>CI</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Materia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in docentes" :key="d.id">
          <td>{{ d.ci }}</td>
          <td>{{ d.nombres }}</td>
          <td>{{ d.apellidos }}</td>
          <td>{{ d.telefono }}</td>
          <td>{{ d.materia }}</td>
          <td>
            <button @click="eliminarDocente(d.id)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
