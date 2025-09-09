import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

// Crear instancia de app y pinia
const app = createApp(App)
const pinia = createPinia()

// Usar pinia y router
app.use(pinia)
app.use(router)

// Registrar iconos
library.add(faPlus, faEdit, faTrash, faSave)
app.component('font-awesome-icon', FontAwesomeIcon)

// Montar app
app.mount('#app')

// ✅ Exportar pinia si necesitas usarlo fuera de componentes (por ejemplo en Axios)
export { pinia }
