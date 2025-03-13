// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
