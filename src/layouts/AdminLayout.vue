<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="admin-layout d-flex">
    <!-- Sidebar -->
    <aside class="bg-dark text-white p-3 vh-100" style="width: 250px;">
      <h4 class="mb-4">Panel Admin</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <RouterLink to="/admin" class="nav-link text-white">Dashboard</RouterLink>
        </li>
        <li class="nav-item mb-2">
          <RouterLink to="/admin/estudiantes" class="nav-link text-white">Estudiantes</RouterLink>
        </li>
        <li class="nav-item mb-2">
          <RouterLink to="/admin/docentes" class="nav-link text-white">Docentes</RouterLink>
        </li>
        <li class="nav-item mb-2">
          <RouterLink to="/admin/materias" class="nav-link text-white">Materias</RouterLink>
        </li>
      </ul>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-grow-1 p-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  min-height: 100vh;
}
</style>
