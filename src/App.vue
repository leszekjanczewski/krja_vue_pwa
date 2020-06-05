<template>
  <v-app>
    <div class="container">
      <Header />
      <BusLines />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Desktop/Header.vue'
import Footer from '@/views/Footer.vue'
import BusLines from '@/components/BusLines/Desktop/BusLines.vue'

export default {
  name: 'App',

  components: {
    Header,
    BusLines,
    Footer
  },

  data: () => ({
    //
  })
}
</script>
