<template>
<div class="">
  <div class="">register</div>
  <div class="login">
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <button @click.prevent="register">register</button>
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
      axios.post('https://reqres.in/api/register', {
        email: this.email,
        password: this.password
      }).then(response => {
        if (response.status === 200) {
          this.$router.push('/')
        }
        console.log(response)
      }).catch(error => {
        if (error.response.status === 400) {
          this.$notify({
            message: '.فقط کاربران تعریف شده موفق به ثبت نام می شوند',
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

</style>
