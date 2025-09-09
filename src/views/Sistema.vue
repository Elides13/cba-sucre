<!-- filepath: d:\PROYECTO DE GRADO\cba-sucre\frontend_cba\src\views\Sistema.vue -->
<template>
    <div class="login">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
<script>
import axios from "axios";

export default {
  name: "Sistema",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      if (this.username && this.password) {
        try {
          const response = await axios.post("http://localhost:3300/auth/login", {
            usuario: this.username,
            clave: this.password,
          });
          if (response.data.success) {
            alert("Inicio de sesión exitoso");
            this.errorMessage = "";
          } else {
            this.errorMessage = "Credenciales incorrectas. Inténtalo de nuevo.";
          }
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
          this.errorMessage = "Ocurrió un error al iniciar sesión. Inténtalo más tarde.";
        }
      } else {
        this.errorMessage = "Por favor, completa todos los campos.";
      }
    },
  },
};
</script>

  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  .login h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .error-message {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  </style>