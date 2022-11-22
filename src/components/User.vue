<template>
  <div class="">
    <div class="bg-loader" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="card-user">
      <img :src="user.avatar">
      <div class="">
        <h2>{{user.first_name}} {{user.last_name}}</h2>
        <h3>{{user.email}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserPage',
  data () {
    return {
      user: [],
      loading: false
    }
  },
  mounted () {
    this.loading = true
    setInterval(() => {
      axios.get(`https://reqres.in/api/users/${this.$route.params.recordId}`).then((response) => {
        this.user = response.data.data
        this.loading = false
      })
    }, 2000)
  }
}
</script>

<style scoped>

</style>
