<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/tooltips/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">提示可以對齊到激活器元素的四個側面 </v-chip>
    <div class="text-center">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Left</v-btn>
        </template>
        <span>Left tooltip</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn>
        </template>
        <span>Top tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Bottom</v-btn>
        </template>
        <span>Bottom tooltip</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Right</v-btn>
        </template>
        <span>Right tooltip</span>
      </v-tooltip>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">提示可見性可以使用v-model以編程方式進行更改。</v-chip>
    <v-container fluid class="text-center">
      <v-row class="flex" justify="space-between">
        <v-col cols="12">
          <v-btn @click="show = !show">toggle</v-btn>
        </v-col>

        <v-col cols="12" class="mt-12">
          <v-tooltip v-model="show" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">mdi-cart</v-icon>
              </v-btn>
            </template>
            <span>Programmatic tooltip</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TooltipsTemplate extends Vue {
  show = false;
}
</script>
