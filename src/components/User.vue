<template>
<div class="">
  <div class="">ID:{{user.id}}</div>
  <div class="">Email:{{user.email}}</div>
  <div class="">FirstName:{{user.first_name}}</div>
  <div class="">LastName:{{user.last_name}}</div>
  <div class="">Avatar:{{user.avatar}}</div>
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
