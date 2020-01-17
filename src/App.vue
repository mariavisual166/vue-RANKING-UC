<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import store from '@/store'
export default {
  name: 'App',
  mounted() {
    if (localStorage.getItem('username') && localStorage.getItem('user')) {
      store.state.username = localStorage.getItem('username')
      store.state.user = JSON.parse(localStorage.getItem('user'))
      /*store.dispatch('getUsername', { username:  store.state.username})
      .then((response) => {
        store.state.user = response.data;
      }) 
      .catch(() => this.error ="Fallo")*/
    } else {
      store.username = '';
      store.user = {}
    }
  }
}
</script>

<style>
.container-login-register {
  padding-top: 10%;
}
</style>


