import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import NotifyPlugin from 'vue-easy-notify'
import 'vue-easy-notify/dist/vue-easy-notify.css'
import './style.scss'

Vue.config.productionTip = false
Vue.use(NotifyPlugin)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
