<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
dense
short
    >
      <div class="v-toolbar__title v-app-bar-title" style="padding: 0"><div class=" v-app-bar-title__content">Welcome to human NUMTs database
      </div></div>

      <template v-slot:extension>
        <v-tabs
            dark
            centered
        >
          <v-tab class="no-capital" to="/">
            Home
          </v-tab>
          <v-tab class="no-capital" to="/blast">
            Blast
          </v-tab>
          <v-tab class="no-capital"  to="/browse">
            Browse
          </v-tab>
          <v-tab class="no-capital"  to="/contact">
            Contact
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
.no-capital{
  text-transform: none !important;
}
</style>
