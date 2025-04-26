import './assets/main.css'; // Archivo CSS principal
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import '@/assets/css/style.css'; // Estilos personalizados

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'aos/dist/aos.css'; // Animaciones AOS
import AOS from 'aos'; // Importación de AOS

// Inicializa la aplicación Vue
const app = createApp(App);

// Configura Pinia (estado global) y el enrutador
app.use(createPinia());
app.use(router);

// Monta la aplicación en el contenedor principal
app.mount('#app');

// Inicializa AOS después de montar la aplicación
AOS.init({
  duration: 1000, // Duración de las animaciones
  once: true, // Ejecutar animaciones solo una vez
});