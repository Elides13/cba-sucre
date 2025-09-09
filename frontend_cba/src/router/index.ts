import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import SobreNosotros from '@/views/SobreNosotros.vue';
import Programas from '@/views/Programas.vue';
import Experiencias from '@/views/Experiencias.vue';
import Sistema from '@/views/Sistema.vue'; // Importa el componente correcto

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/sobre-nosotros' }, // Redirige la raíz a "Sobre Nosotros"
  { path: '/sobre-nosotros', component: SobreNosotros },
  { path: '/programas', component: Programas },
  { path: '/experiencias', component: Experiencias },
  { path: '/sistema', component: Sistema }, // Asigna el componente correcto
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;