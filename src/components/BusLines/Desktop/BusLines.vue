<template>
    <v-row class="bus-lines">
      <v-col v-for="(line) in lines" :key="line.id" class="text-center" cols="1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">{{ line.name }}</v-btn>
          </template>
          <span>{{ line.description }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
</template>

<script>
export default {
  computed: {
    lines () {
      return this.$store.getters['lines/lines']
    }
  },
  data () {
    return {
      linieTest: [
        {
          id: 1,
          name: '2c',
          description: 'opis testowy'
        },
        {
          id: 2,
          name: '3c',
          description: 'opis testowy drugi'
        }
      ]
    }
  },
  methods: {
    async loadLines () {
      this.isLoading = true
      await this.$store.dispatch('lines/loadLines')
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scoped>

  .bus-lines {
    margin-top: 30px;
  }

</style>
