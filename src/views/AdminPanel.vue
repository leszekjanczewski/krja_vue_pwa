<template>
<div>
  <v-row class="admin-buttons">
    <v-btn class="admin-button" v-on:click="selectLine">Linie autobusowe</v-btn>
    <v-btn class="admin-button" v-on:click="selectStation">Przystanki</v-btn>
    <v-btn class="admin-button" v-on:click="selectDeparture">Godziny odjazdów</v-btn>
  </v-row>
  <div>
    <add-line v-if="addLine"></add-line>
    <add-station v-if="addStation"></add-station>
    <add-departure v-if="addDeparture"></add-departure>
  </div>
</div>
</template>

<script>
import AdminAddLine from '../components/AdminAddLine/AddLine.vue'
import AdminAddStation from '../components/AdminAddStation/AdminAddStation.vue'
import AdminAddDeparture from '../components/AdminAddDeparture/AdminAddDeparture.vue'

export default {
  name: 'AdminPanel',
  components: {
    'add-line': AdminAddLine,
    'add-station': AdminAddStation,
    'add-departure': AdminAddDeparture
  },
  data () {
    return {
      addLine: false,
      addStation: false,
      addDeparture: false
    }
  },
  methods: {
    selectLine () {
      this.addLine = true
      this.addStation = false
      this.addDeparture = false
    },
    selectStation () {
      this.addLine = false
      this.addStation = true
      this.addDeparture = false
    },
    selectDeparture () {
      this.addLine = false
      this.addStation = false
      this.addDeparture = true
    }
  }
}
</script>

<style lang="less" scoped>
.admin-buttons {
  margin-top: 30px;
}
    .admin-button {
      margin: 5px;
    }
</style>
