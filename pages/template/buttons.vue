<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/buttons/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >凸起的按鈕有一個會在在點擊時加重的框陰影，這是默認的樣式。</v-chip
    >

    <div class="d-flex">
      <v-btn class="mx-1" small>Normal</v-btn>
      <v-btn class="mx-1" small color="primary">Primary</v-btn>
      <v-btn class="mx-1" small color="error">Error</v-btn>
      <v-btn class="mx-1" small disabled>Disabled</v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">凹陷的按鈕依然保持其背景色，但沒有框陰影。</v-chip>
    <div class="d-flex">
      <v-btn class="mx-1" depressed>Normal</v-btn>
      <v-btn class="mx-1" depressed color="primary">Primary</v-btn>
      <v-btn class="mx-1" depressed color="error">Error</v-btn>
      <v-btn class="mx-1" depressed disabled>Disabled</v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">圖標可作為按鈕的主要內容。</v-chip>
    <div class="d-flex">
      <v-btn class="mx-1" icon color="green">
        <v-icon>mdi-cached</v-icon></v-btn
      >
      <v-btn class="mx-1" icon color="pink"> <v-icon>mdi-heart</v-icon></v-btn>
      <v-btn class="mx-1" icon color="indigo"> <v-icon>mdi-star</v-icon></v-btn>
      <v-btn class="mx-1" icon color="deep-orange">
        <v-icon>mdi-thumb-up</v-icon></v-btn
      >
      <v-btn class="mx-1" icon> <v-icon>mdi-heart</v-icon></v-btn>
      <v-btn class="mx-1" icon disabled> <v-icon>mdi-star</v-icon></v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">浮動按鈕是圓形的，通常包含一個圖標</v-chip>
    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark>mdi-heart</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="purple">
        <v-icon dark>mdi-android</v-icon>
      </v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">輪廓按鈕從應用的當前顏色繼承其邊框。 </v-chip>
    <div class="text-center">
      <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
      <v-btn class="ma-2" outlined fab color="teal">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <v-btn class="ma-2" outlined large fab color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">平鋪按鈕的行為與常規按鈕相同，但沒有邊框半徑。</v-chip>
    <div class="text-center">
      <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
      <v-btn class="ma-2" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> Edit
      </v-btn>
      <v-btn class="ma-2" tile large color="teal" icon>
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">平鋪按鈕的行為與常規按鈕相同，但沒有邊框半徑。</v-chip>
    <div class="text-center">
      <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
      <v-btn class="ma-2" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> Edit
      </v-btn>
      <v-btn class="ma-2" tile large color="teal" icon>
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用加載（loading）屬性，你可以通知用戶有正在進行的處理。默認行為是使用一個v-progress-circular組件，但可以對齊進行自定義</v-chip
    >
    <div class="text-center">
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="secondary"
        @click="loader = 'loading'"
      >
        Accept Terms
      </v-btn>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Upload
        <v-icon right dark>mdi-cloud-upload</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="loader = 'loading2'"
      >
        Custom Loader
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>

      <v-btn
        class="ma-2"
        :loading="loading4"
        :disabled="loading4"
        color="info"
        @click="loader = 'loading4'"
      >
        Icon Loader
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </template>
      </v-btn>

      <v-btn
        :loading="loading5"
        :disabled="loading5"
        color="blue-grey"
        class="ma-2 white--text"
        fab
        @click="loader = 'loading5'"
      >
        <v-icon dark>mdi-cloud-upload</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class ButtonsTemplate extends Vue {
  loader = null;
  loading = false;
  loading2 = false;
  loading3 = false;
  loading4 = false;
  loading5 = false;
}
</script>
