import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Experiencia from '../views/Experiencia.vue'
import Programa from '../views/Programa.vue'
import Sistema from '../views/Sistema.vue'
import SobreNosotros from '../views/SobreNosotros.vue'
import AdminEstudiantes from "../views/admin/AdminEstudiantes.vue";
import AdminDocentes from "../views/admin/AdminDocentes.vue";
import AdminMaterias from "../views/admin/AdminMaterias.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/experiencia', component: Experiencia },
  { path: '/programa', component: Programa },
  { path: '/sistema', component: Sistema },
  { path: '/sobre-nosotros', component: SobreNosotros },

  // Rutas admin (solo admins)
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: '', component: AdminDashboard }, // Dashboard por defecto
      { path: 'estudiantes', component: AdminEstudiantes },
      { path: 'docentes', component: AdminDocentes },
      { path: 'materias', component: AdminMaterias },
    ]
  },

  // Redirección para rutas no encontradas
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 👇 ESTA LÍNEA FALTABA
export default router
