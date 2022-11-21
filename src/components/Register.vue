<template>
<div class="">
  <div class="">register</div>
  <div class="login">
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <button @click.prevent="register">register</button>
  </div>
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
      }).then(res => {
        if (res.status === 200) {
          this.$router.push('/')
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      console.log('register')
    }
  }
}
</script>

<style scoped>

</style>
