<template>
  <div class="modal-backdrop">
    <div class="modal">
    <form class="modal-body">
    <v-text-field
      v-model="name"
      label="Nazwa linii"
      required
    ></v-text-field>
    <v-text-field
      v-model="description"
      label="Opis linii"
      required
    ></v-text-field>
    <v-btn
      class="mr-4"
      color="primary"
      @click="submit"
      :disabled="!name"
    >
      Dodaj
    </v-btn>
    <v-btn
      class="mr-4"
      color="success"
      @click="clear"
    >
      Wyczyść
    </v-btn>
    <v-btn
      class="mr-4"
      color="error"
      @click="close"
    >
      Zamknij
    </v-btn>
  </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['save-data'],
  data () {
    return {
      id: '',
      name: '',
      description: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    clear () {
      this.name = ''
      this.description = ''
    },
    submit () {
      const line = {
        id: this.$store.getters['lines/lineId'],
        name: this.name,
        description: this.description
      }
      this.$emit('save-data', line)
      this.name = ''
      this.description = ''
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 70%;
  }

  .modal-body {
    position: relative;
    padding: 10px 10px;
  }
</style>
