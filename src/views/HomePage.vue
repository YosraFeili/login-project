<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name:'list'}">
          list
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'profile'}">
          profile
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>

</style>
