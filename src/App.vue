<template>

  <Navbar />

  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Layout/Navbar.vue'

export default {
  name: "App",

  components: {
    Navbar,
  }
}
</script>