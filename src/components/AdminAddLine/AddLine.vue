<template>
<div>
  <v-btn class="mx-2" fab dark color="indigo" @click="showModal">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
    <v-simple-table>
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
          v-for="line in lines"
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
  <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import modal from './AddLineModalForm.vue'

export default {
  name: 'AddLine',
  components: {
    modal
  },
  data () {
    return {
      lines: [
        {
          id: 1,
          name: '2A',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        },
        {
          id: 2,
          name: '2B',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        },
        {
          id: 1,
          name: '2C',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        }
      ],
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
</script>
