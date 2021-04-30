<template>

  <Navbar />

  <!-- <Carousel /> -->

  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Layout/Navbar.vue'
import Carousel from './components/Misc/Carousel.vue'

export default {
  name: "App",

  components: {
    Navbar,
    Carousel,
  }
}
</script>