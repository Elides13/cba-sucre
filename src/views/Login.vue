<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

function handleLogin() {
  if (authStore.login(username.value, password.value)) {
    router.push('/admin')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h3 class="mb-3 text-center">Login Administrador</h3>
    <div class="card p-4 shadow">
      <div class="mb-3">
        <label class="form-label">Usuario</label>
        <input v-model="username" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <button class="btn btn-primary w-100" @click="handleLogin">
        Ingresar
      </button>
    </div>
  </div>
</template>
