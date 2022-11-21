<template>
  <div class="">
    <div class="">
      <input type="text" v-model="search" placeholder="search(filter)" @input="filterUsers">
    </div>
    <div class="" v-for="user in filteredUsers" :key="user.id">
      <div class="">
        <router-link :to="{name:'user', params: { recordId: user.id }}">
        <div class="">ID:{{user.id}}</div>
        <div class="">Email:{{user.email}}</div>
        <div class="">FirstName:{{user.first_name}}</div>
        <div class="">LastName:{{user.last_name}}</div>
        <div class="">Avatar:{{user.avatar}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List-page',
  data () {
    return {
      filteredUsers: [],
      allUsers: [],
      search: ''
    }
  },
  mounted () {
    axios.get('https://reqres.in/api/users?page=2').then((response) => {
      this.allUsers = response.data.data
      this.filteredUsers = this.allUsers
    })
  },
  methods: {
    filterUsers () {
      if (this.search === '') {
        this.filteredUsers = this.allUsers
      }
      this.filteredUsers = this.allUsers.filter(user => {
        return user.first_name.includes(this.search) || user.email.includes(this.search)
      })
      console.log(this.filteredUsers)
    }
  }
}
</script>

<style scoped>

</style>
