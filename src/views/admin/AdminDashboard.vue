<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(true)

// Opciones del menú lateral
const menuItems = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Estudiantes', path: '/admin/estudiantes' },
  { name: 'Docentes', path: '/admin/docentes' },
  { name: 'Materias', path: '/admin/materias' },
]
</script>

<template>
  <div class="admin-container d-flex">
    <!-- Menú lateral -->
    <nav class="sidebar bg-dark text-white p-3" :class="{ collapsed: !menuOpen }">
        <ul class="nav flex-column">
          <h1>class="mb-4">Panel Admin</h1>
            <router-link to="/admin/estudiantes">Estudiantes</router-link> |
            <router-link to="/admin/docentes">Docentes</router-link>
            <router-view></router-view>
        <li class="nav-item" v-for="item in menuItems" :key="item.name">
          <a class="nav-link text-white" :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
      <button @click="menuOpen = !menuOpen" class="btn btn-sm btn-secondary mt-3">
        {{ menuOpen ? 'Cerrar' : 'Abrir' }}
      </button>
    </nav>

    <!-- Contenido principal -->
    <div class="content p-4 flex-grow-1">
      <router-view></router-view> <!-- Aquí se cargan las rutas hijas -->
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 60px;
}

.content {
  background: #f8f9fa;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
