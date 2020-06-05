<template>
  <div class="container">
    <Header />
    <AppLines />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Desktop/Header.vue'
import Footer from '@/views/Footer.vue'
import AppLines from '@/components/BusLines/Desktop/BusLines.vue'

export default {
  name: 'App',

  components: {
    Header,
    AppLines,
    Footer
  },

  data: () => ({
    //
  })
}
</script>
