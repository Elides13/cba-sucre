import './assets/main.css'; // Si está en src/assets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/assets/css/style.css'; // Tu archivo de estilo de la plantilla

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Montamos la app primero
app.mount('#app');

// Luego inicializamos AOS
AOS.init(); // Ahora se ejecuta después de que Vue ha montado la app
