<template>
    <v-row class="bus-lines">
      Linie autobusowe
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">1A</v-btn>
          </template>
        <span>Różanki, Wojcieszyce - Gorzów</span>
      </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>1B</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>2A</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>2B</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>3A</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>3B</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>3C</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="1">
        <div class="my-2">
          <v-btn>3D</v-btn>
        </div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => {
  }
}
</script>

<style lang="less" scoped>

  .bus-lines {
    margin-top: 30px;
  }

</style>
