<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/toolbars/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >工具欄可以顯示背景，而不是純色。可以通過使用img插槽並提供您自己的v-img組件來進行修改。可以使用v-app-bar
      淡化背景
    </v-chip>

    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider class="my-5"></v-divider>

    <v-chip class="mb-5"
      >使用collapse和collapse-on-scroll屬性可以可以輕鬆控制用戶與之交互的工具欄的狀態。
    </v-chip>

    <v-card class="overflow-hidden">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-checkbox
          v-model="collapseOnScroll"
          color="white"
          hide-details
        ></v-checkbox>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >浮動工具欄被轉換成內聯元素，只佔用所需的空間。這在將工具欄放置在內容上時特別有用。
    </v-chip>
    <v-card
      class="pa-4"
      flat
      height="300px"
      img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
    >
      <v-toolbar dense floating>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class BarsTempalte extends Vue {
  collapseOnScroll = true;
}
</script>
