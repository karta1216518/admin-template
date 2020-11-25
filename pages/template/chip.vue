<template>
  <v-container>
    <a target="_block" href="https://v2.vuetifyjs.com/zh-Hans/components/chips/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >紙片可以使用文本或“ Material Icons 字體庫中可用的任何圖標。
    </v-chip>

    <div class="text-center">
      <v-chip class="ma-2" color="indigo" text-color="white">
        <v-avatar left>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        Ranee
      </v-chip>

      <v-chip class="ma-2" color="orange" text-color="white">
        Premium
        <v-icon right>mdi-star</v-icon>
      </v-chip>

      <v-chip class="ma-2" color="primary" text-color="white">
        1 Year
        <v-icon right>mdi-cake-variant</v-icon>
      </v-chip>

      <v-chip class="ma-2" color="green" text-color="white">
        <v-avatar left class="green darken-4">
          1
        </v-avatar>
        Years
      </v-chip>

      <v-chip
        class="ma-2"
        close
        color="teal"
        text-color="white"
        @click:close="close"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Confirmed
      </v-chip>

      <v-chip
        class="ma-2"
        close
        color="teal"
        text-color="white"
        close-icon="mdi-delete"
        @click:close="close"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Confirmed
      </v-chip>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">輪廓紙片從當前文本顏色繼承其邊框顏色。 </v-chip>
    <div class="text-center">
      <v-chip class="ma-2" color="success" outlined>
        <v-icon left>mdi-server-plus</v-icon>
        Server Status
      </v-chip>

      <v-chip class="ma-2" color="primary" outlined pill>
        User Account
        <v-icon right>mdi-account-outline</v-icon>
      </v-chip>

      <v-chip class="ma-2" color="deep-purple accent-4" outlined>
        <v-icon left>mdi-wrench</v-icon>
        Update Settings
      </v-chip>

      <v-chip class="ma-2" close color="indigo darken-3" outlined>
        <v-icon left>mdi-fire</v-icon>
        New Posts Available
      </v-chip>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >v-chip組件可以擁有不同的大小，從x-small到x-large。</v-chip
    >
    <div class="text-center">
      <v-chip class="ma-2" x-small label>
        <v-icon left>mdi-label</v-icon>
        Label
      </v-chip>

      <v-chip class="ma-2" color="pink" small label text-color="white">
        <v-icon left>mdi-label</v-icon>
        Tags
      </v-chip>

      <v-chip class="ma-2" color="green" label text-color="white">
        <v-icon left>mdi-label</v-icon>
        Default
      </v-chip>

      <v-chip class="ma-2" color="primary" large label>
        <v-icon left>mdi-account-circle-outline</v-icon>
        John Leider
      </v-chip>

      <v-chip class="ma-2" close color="cyan" x-large label text-color="white">
        <v-icon left>mdi-twitter</v-icon>
        New Tweets
      </v-chip>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class ChipTempalte extends Vue {
  close() {
    alert("關了拉幹");
  }
}
</script>
