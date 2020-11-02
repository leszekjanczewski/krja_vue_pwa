<template>
  <div>
    <BusLines />
    <BusStations />
  </div>
</template>

<script>
import BusLines from '@/components/BusLines/Desktop/BusLines.vue'
import BusStations from '@/components/BusStations/Desktop/BusStations.vue'

export default {
  components: {
    BusLines,
    BusStations
  }
}
</script>
