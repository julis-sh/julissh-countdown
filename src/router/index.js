import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'

const routes = [
  {
    path: '/countdown/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/countdown/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/countdown/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
