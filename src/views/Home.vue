<template>
  <v-container class="">
    <v-row no-gutters>
      <v-col class="d-flex justify-center" >
        <v-img max-width="25em" :src="require('../../public/Picture1.png')"/>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-img max-width="25em" :src="require('../../public/Picture2.png')"/>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <p class="text-justify text-subtitle-1" >
          Nuclear insertions of mitochondrial origin (NUMTs) can be useful tools in evolution and population studies. However, due to their similarity to mtDNA, NUMTs may also be a source of contamination in mtDNA studies. The main goal of this work is to present a database of NUMTs, based on the previously reported studies and the  latest version of the human genome-GRCh38 draft. A total of 783 insertions were identified. There are 33 paralogous sequences with over 80% sequence similarity and of a greater length than 500bp.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
    },
  })
</script>
