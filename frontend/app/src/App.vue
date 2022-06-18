<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-col class="mb-5" cols="12">
        <title-logo></title-logo>
        <v-row justify="center">
          <v-breadcrumbs divider="/">
            <router-link to="/">home</router-link>
          </v-breadcrumbs>
          <v-breadcrumbs divider="/">
            <router-link to="/post">post</router-link>
          </v-breadcrumbs>
          <v-breadcrumbs divider="/">
            <router-link to="/about">about</router-link>
          </v-breadcrumbs>
        </v-row>
      </v-col>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TitleLogo from './components/TitleLogo.vue'


export default Vue.extend({
  name: 'App',
  components: {
    TitleLogo
  },
});
</script>
