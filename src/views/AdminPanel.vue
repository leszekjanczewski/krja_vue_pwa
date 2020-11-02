<template>
  <v-row class="admin-buttons">
    <v-btn class="admin-button">Linie autobusowe</v-btn>
    <v-btn class="admin-button">Przystanki</v-btn>
    <v-btn class="admin-button">Godziny odjazdów</v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'AdminPanel',
  data: () => ({})
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
