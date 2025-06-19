import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import presentation from '../views/presentation.vue'
import transporteur from '../views/transporteur.vue'
import contact from '../views/contact.vue'
import login_register from '../views/login_register.vue'

const routes = [
  { path: '/', component: Home },
  { path : '/presentation', component: presentation },
  { path : '/transporteur', component: transporteur },
  { path : '/contact', component: contact },
  { path : '/login_register', component: login_register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
