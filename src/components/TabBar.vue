<template>
  <div class="">
    <div class="">
      <div class="tab">
        <button class="tab-btn" @click="openTab('profile')">profile</button>
        <button class="tab-btn" @click="openTab('list')">list</button>
      </div>
    </div>
    <div class="">
      <div id="profile" class="tab-body">
       <ProfilePage/>
      </div>

      <div id="list" class="tab-body" style="display:none">
        <list/>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePage from '@/components/Profile'
import List from '@/components/List'
export default {
  name: 'TabBar',
  components: { List, ProfilePage },
  data () {
    return {}
  },
  methods: {
    openTab (tabName) {
      let i
      const x = document.getElementsByClassName('tab-body')
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      document.getElementById(tabName).style.display = 'block'
    }
  }
}
</script>

<style scoped>
.tab{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.tab-btn{
  width: 10%;
  height: 50px;
  border-radius: 8px;
  background: #2c3e50;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
</style>
