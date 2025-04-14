import { createRouter, createWebHistory } from 'vue-router';
import SobreNosotros from '@/views/SobreNosotros.vue';
import Programas from '@/views/Programas.vue';
import Experiencias from '@/views/Experiencias.vue';
import Home from "@/views/HomeView.vue";


const routes: Array<RouteRecordRaw> = [
  { path: '/sobre-nosotros', component: SobreNosotros },
  { path: '/programas', component: Programas },
  { path: '/experiencias', component: Experiencias },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

