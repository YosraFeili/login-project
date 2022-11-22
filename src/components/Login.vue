<template>
  <div class="login">
    <div class="card">
      <h1>Login</h1>
      <input ref="email" type="email" v-model="email" placeholder="email">
      <div class="error-msg">{{errorMsg}}</div>
      <input ref="password" type="text" v-model="password" placeholder="password">
      <div class="error-msg">{{errorMsg}}</div>
      <div class="">
        <button class="login-btn" @click.prevent="login">login</button>
      </div>
      <div class="">
        <p>If you don't have an account, register</p>
        <router-link :to="{name: 'register'}">
          <button class="register-btn">register</button>
        </router-link>
      </div>
      <notifications></notifications>
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
      password: '',
      errorMsg: '',
      token: localStorage.getItem('token')

    }
  },
  methods: {
    login () {
      if (this.email === '') {
        this.$notify({
          message: 'Please enter your e-mail address',
          type: 'error',
          size: 'sm',
          timeout: 3000
        })
      } else if (this.password === '') {
        this.$notify({
          message: 'Please enter your password',
          type: 'error',
          size: 'sm',
          timeout: 3000
        })
      } else {
        axios.post('https://reqres.in/api/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          this.$router.push('/home/list')
        }).catch(error => {
          if (error.response.status === 400) {
            this.$notify({
              message: 'This account does not exist, please register.',
              type: 'error', // success, warning, error
              size: 'sm',
              timeout: 3000
            })
            this.email = ''
            this.password = ''
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.login {
}
</style>
