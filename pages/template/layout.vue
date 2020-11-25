<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/app-bars/"
      >中文文檔</a
    >
    <v-divider></v-divider>
    <v-chip class="mt-5"
      >使用justify和justify-self屬性更改伸縮項及其父項的水平對齊。</v-chip
    >

    <v-row v-for="j in justify" :key="j" :justify="j">
      <v-col v-for="k in 2" :key="k" md="4">
        <v-card class="pa-2" outlined tile>
          One of two columns
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-chip class="mt-5"
      >使用auto margin helper utilities 你可以強行將列從彼此分離。</v-chip
    >

    <v-row>
      <v-col md="4">
        <v-card class="pa-2" outlined tile>
          .col-md-4
        </v-card>
      </v-col>
      <v-col md="4" class="ml-auto">
        <v-card class="pa-2" outlined tile>
          .col-md-4 .ml-auto
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" class="ml-md-auto">
        <v-card class="pa-2" outlined tile>
          .col-md-3 .ml-md-auto
        </v-card>
      </v-col>
      <v-col md="3" class="ml-md-auto">
        <v-card class="pa-2" outlined tile>
          .col-md-3 .ml-md-auto
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto" class="mr-auto">
        <v-card class="pa-2" outlined tile>
          .col-auto .mr-auto
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="pa-2" outlined tile>
          .col-auto
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class LayoutTemplate extends Vue {
  justify = ["start", "center", "end", "space-around", "space-between"];
}
</script>
