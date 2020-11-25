<template>
  <v-container>
    <a target="_block" href="https://v2.vuetifyjs.com/zh-Hans/components/tabs/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >v-tabs-items 組件允許你自定義每個標籤的內容。使用共享的
      v-model，v-tabs-items 將與當前選擇的 v-tab 同步。
    </v-chip>
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >grow 屬性將使選項卡項目佔用所有可用空間，最大寬度為 300px。
    </v-chip>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">BASiL</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in fourItems" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in fourItems" :key="item">
          <v-card color="basil" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >如果選項卡項目超出其容器，則分頁控件將出現在桌面設備。
      對於移動設備，箭頭將僅與 show-arrows 屬性一起顯示。
    </v-chip>
    <v-card>
      <v-tabs
        v-model="moreTab"
        dark
        background-color="teal darken-3"
        show-arrows
      >
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">
          Item {{ i }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="moreTab">
        <v-tab-item v-for="i in 30" :key="i" :value="'tab-' + i">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >v-tab 可以包含圖標和文本。這將 v-tabs 的高度增加到 72px。
    </v-chip>
    <v-card>
      <v-tabs
        v-model="iconTab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Recents
          <v-icon>mdi-phone</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Favorites
          <v-icon>mdi-heart</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Nearby
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="iconTab">
        <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >將 v-tabs 與 v-toolbar-title 組件對齊（v-toolbar 中必須使用
      v-app-bar-nav-icon 或 v-btn ）
    </v-chip>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Your Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="toolBarTab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in fourItems" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="toolBarTab">
        <v-tab-item v-for="item in fourItems" :key="item">
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TabsTemplate extends Vue {
  tab = null;
  moreTab = null;
  iconTab = null;
  toolBarTab = null;
  items = [
    { tab: "One", content: "Tab 1 Content" },
    { tab: "Two", content: "Tab 2 Content" },
    { tab: "Three", content: "Tab 3 Content" },
    { tab: "Four", content: "Tab 4 Content" },
    { tab: "Five", content: "Tab 5 Content" },
    { tab: "Six", content: "Tab 6 Content" },
    { tab: "Seven", content: "Tab 7 Content" },
    { tab: "Eight", content: "Tab 8 Content" },
    { tab: "Nine", content: "Tab 9 Content" },
    { tab: "Ten", content: "Tab 10 Content" }
  ];

  get fourItems() {
    return this.items.slice(0, 4).map(item => item.tab);
  }

  text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
</script>
