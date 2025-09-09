<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios'

interface Materia {
  id: number
  nombre: string
  codigo: string
  docente?: string
}

const materias = ref<Materia[]>([])
const nuevaMateria = ref<Partial<Materia>>({})

const cargarMaterias = async () => {
  try {
    const { data } = await axios.get('/materias')
    materias.value = data
  } catch (error) {
    console.error(error)
  }
}

const agregarMateria = async () => {
  try {
    const { data } = await axios.post('/materias', nuevaMateria.value)
    materias.value.push(data)
    nuevaMateria.value = {}
  } catch (error) {
    console.error(error)
  }
}

const eliminarMateria = async (id: number) => {
  try {
    await axios.delete(`/materias/${id}`)
    materias.value = materias.value.filter(m => m.id !== id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(cargarMaterias)
</script>

<template>
  <div class="container py-4">
    <h2>Administrar Materias</h2>

    <div class="mb-4">
      <input v-model="nuevaMateria.nombre" placeholder="Nombre" class="form-control mb-2"/>
      <input v-model="nuevaMateria.codigo" placeholder="Código" class="form-control mb-2"/>
      <input v-model="nuevaMateria.docente" placeholder="Docente" class="form-control mb-2"/>
      <button @click="agregarMateria" class="btn btn-primary">Agregar</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Código</th>
          <th>Docente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in materias" :key="m.id">
          <td>{{ m.nombre }}</td>
          <td>{{ m.codigo }}</td>
          <td>{{ m.docente }}</td>
          <td>
            <button @click="eliminarMateria(m.id)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
