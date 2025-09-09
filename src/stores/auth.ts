import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      isAuthenticated.value = true
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
  }

  return { isAuthenticated, login, logout }
})
