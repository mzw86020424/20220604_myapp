import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostListView from '@/views/PostListView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'post',
    component: PostListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
