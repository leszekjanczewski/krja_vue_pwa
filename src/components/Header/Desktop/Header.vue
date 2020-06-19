<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense rounded>
        <v-list-item link :to="{ name: 'Home' }">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="auth" link :to="{ name: 'Admin' }">
          <v-list-item-action>
            <v-icon>mdi-database-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Administracja</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!auth" link :to="{ name: 'Login' }">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="auth" @click="onLogout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'About' }">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>O ...</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Kłodawski Rozkład Jazdy Autobusów</v-toolbar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
