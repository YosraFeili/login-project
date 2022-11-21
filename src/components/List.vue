<template>
  <div class="">
    <div class="search-box">
      <input type="text" v-model="search" placeholder="search(filter)" @input="filterUsers">
    </div>
    <div class="" v-for="user in filteredUsers" :key="user.id">
        <router-link :to="{name:'profile', params: { recordId: user.id }}" class="card-user">
          <img :src="user.avatar">
          <div class="">
            <h2>{{user.first_name}} {{user.last_name}}</h2>
            <h3>{{user.email}}</h3>
          </div>
        </router-link>
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
    }
  }
}
</script>

<style scoped>

</style>
