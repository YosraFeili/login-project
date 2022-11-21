<template>
<div class="card-user">
  <img :src="user.avatar">
  <div class="">
    <h2>{{user.first_name}} {{user.last_name}}</h2>
    <h3>{{user.email}}</h3>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserPage',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    axios.get(`https://reqres.in/api/users/${this.$route.params.recordId}`).then((response) => {
      this.user = response.data.data
      console.log(response)
    })
  }
}
</script>

<style scoped>

</style>
