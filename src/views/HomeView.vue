<template>
  <div class="bg">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src

import Login from '@/components/Login'
export default {
  name: 'HomeView',
  components: { Login }
}
</script>
