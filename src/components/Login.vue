<template>
<div class="">
  <div class="">Login</div>
  <div class="login">
    <input type="email" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <button @click.prevent="login">login</button>
  </div>
  <div class="">
    <router-link :to="{name: 'register'}">register</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''

    }
  },
  methods: {
    login () {
      axios.post('https://reqres.in/api/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.status === 200) {
          this.$router.push('/home')
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.login{
}
</style>
