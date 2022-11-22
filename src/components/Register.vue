<template>
<div class="login">
  <div class="card">
    <h1 class="">register</h1>
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <div class="">
      <button @click.prevent="register" class="login-btn">register</button>
    </div>
  </div>
  <notifications></notifications>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
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
        axios.post('https://reqres.in/api/register', {
          email: this.email,
          password: this.password
        }).then(response => {
          if (response.status === 200) {
            this.$router.push('/')
          }
        }).catch(error => {
          if (error.response.status === 400) {
            this.$notify({
              message: '.فقط کاربران تعریف شده موفق به ثبت نام می باشند',
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

</style>
