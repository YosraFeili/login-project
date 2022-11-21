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
  <notifications></notifications>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      token: localStorage.getItem('token')

    }
  },
  methods: {
    login () {
      axios.post('https://reqres.in/api/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        this.$router.push('/home')
        console.log(response)
      }).catch(error => {
        if (error.response.status === 400) {
          this.$notify({
            message: '.این حساب کاربری وجود ندارد، لطفا ثبت نام کنید',
            type: 'error', // success, warning, error
            size: 'lg',
            timeout: 3000
          })
        }

        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.login{
}
</style>
