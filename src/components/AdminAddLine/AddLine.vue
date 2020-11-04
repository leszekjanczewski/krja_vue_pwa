<template>
<div>
  <v-btn class="mx-2" fab dark color="indigo" @click="showModal">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
    <v-simple-table v-if="hasLines">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Nazwa
          </th>
          <th class="text-left">
            Opis
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(line, key) in lines"
          :key="line.id"
        >
          <td>{{ line.id }}</td>
          <td>{{ line.name }}</td>
          <td>{{ line.description }}</td>
          <td>
            <div class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="error"
                @click="removeLine(key)"
              >
                <v-icon dark>
                  mdi-minus
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="primary"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <h3 v-else>Braki linii autobusowych</h3>
  <add-line-modal-form
      @save-data="addLine"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import AddLineModalForm from './AddLineModalForm.vue'

export default {
  name: 'AddLine',
  components: {
    AddLineModalForm
  },
  computed: {
    lines () {
      return this.$store.getters['lines/lines']
    },
    hasLines () {
      return this.$store.getters['lines/hasLines']
    }
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    addLine (data) {
      this.$store.dispatch('lines/addLine', data)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    removeLine (index) {
      this.lines.splice(index, 1)
    }
  }
}
</script>
