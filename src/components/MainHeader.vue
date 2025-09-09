<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <RouterLink to="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>CBA Sucre</h2>
    </RouterLink>

    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <RouterLink to="/" class="nav-item nav-link">Inicio</RouterLink>
        <RouterLink to="/about" class="nav-item nav-link">Acerca de</RouterLink>
        <RouterLink to="/experiencia" class="nav-item nav-link">Experiencia</RouterLink>
        <RouterLink to="/programa" class="nav-item nav-link">Programa</RouterLink>
        <RouterLink to="/sistema" class="nav-item nav-link">Sistema</RouterLink>
        <RouterLink to="/estudiantes" class="nav-item nav-link">Estudiantes</RouterLink>
        <RouterLink to="/sobre-nosotros" class="nav-item nav-link">Sobre Nosotros</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
