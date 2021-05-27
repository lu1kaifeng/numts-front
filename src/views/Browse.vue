<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
            :headers="headers"
            :items="entries"
            :single-expand="true"
            :expanded.sync="expanded"
            show-expand
            item-key="id"
            class="elevation-1"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.que }}
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Axios from 'axios'
import {Gene} from "@/model/Gene";
// Define the component in class-style
@Component
export default class Browse extends Vue {
  expanded= []
  headers=[
    {
      text: 'Gene ID',
      align: 'left',
      sortable: false,
      value: 'numtS_Code',
    },
    { text: 'Start', value: 'cstart' },
    { text: 'End', value: 'cend' },
    { text: 'Strand', value: 'strand' },
  ]
  entries : Gene[] = []
  async mounted(){
      this.entries.push(...(await Axios.get('/Gene',{
      })).data)
  }
}
</script>

<style scoped>

</style>
