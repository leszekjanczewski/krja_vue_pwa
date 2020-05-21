<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Desktop/Header.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
}
</script>
