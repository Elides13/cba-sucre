<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <router-link to="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 class="m-0 text-primary">
        <i class="fa fa-book me-3"></i>eLEARNING
      </h2>
    </router-link>

    <button
      class="navbar-toggler me-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link to="/" class="nav-item nav-link">Inicio</router-link>
        <router-link to="/about" class="nav-item nav-link">Acerca</router-link>
        <router-link to="/experiencia" class="nav-item nav-link">Experiencia</router-link>
        <router-link to="/programa" class="nav-item nav-link">Programa</router-link>
        <router-link to="/sistema" class="nav-item nav-link">Sistema</router-link>
        <router-link to="/sobre-nosotros" class="nav-item nav-link">Sobre Nosotros</router-link>
      </div>

      <a href="#" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Join Now <i class="fa fa-arrow-right ms-3"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
