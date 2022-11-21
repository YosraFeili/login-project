import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import Register from '@/components/Register'
import List from '@/components/List'
import Profile from '@/components/Profile'
import LandingView from '@/views/LandingView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
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
        path: '/profile/:recordId',
        name: 'profile',
        component: Profile
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
