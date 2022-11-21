import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '@/views/HomePage'
import Register from '@/components/Register'
import User from '@/components/User'
import List from '@/components/List'
import Profile from '@/components/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/home',
    name: 'home-page',
    component: HomePage,
    children: [
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: ':recordId',
        name: 'user',
        component: User
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
