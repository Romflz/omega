import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardsView from '@/views/CardsView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import StocksView from '@/views/StocksView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/analytics', name: 'analytics', component: AnalyticsView },
  { path: '/cards', name: 'cards', component: CardsView },
  { path: '/stocks', name: 'stocks', component: StocksView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
