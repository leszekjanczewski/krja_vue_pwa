<template>
    <v-row class="bus-lines">
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">1A</v-btn>
          </template>
          <span>Różanki/Wojcieszyce - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">1B</v-btn>
          </template>
          <span>Róźanki Szklarnia - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">2A</v-btn>
          </template>
          <span>Gorzów - Santocko - Kłodawa - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">2B</v-btn>
          </template>
          <span>Gorzów - Chwalęcice - Santocko - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
          <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">3A</v-btn>
          </template>
          <span>Gorzów - Kłodawa - Łośno - Zdrosiko - Różanki - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">3B</v-btn>
          </template>
          <span>Gorzów - Różanki - Zdrosiko - Łośno - Kłodawa - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">3C</v-btn>
          </template>
          <span>Gorzów - Kłodawa - Łośno - Zdroisko - Wojcieszyce - Kłodawa - Gorzów</span>
        </v-tooltip>
      </v-col>
      <v-col class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">3D</v-btn>
          </template>
          <span>Gorzów - Kłodawa - Wojcieszyce - Zdroisko - Łośno - Kłodawa - Gorzów</span>
        </v-tooltip>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style lang="less" scoped>

  .bus-lines {
    margin-top: 30px;
  }

</style>
