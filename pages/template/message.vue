<template>
  <v-container>
    <a
      target="_block"
      href="https://memeprod.sgp1.digitaloceanspaces.com/meme/df5ba7787912afb603a313dc33d6519c.png"
      >沒有文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >直接訪問 this.$successMsg('訊息') 可呼叫訊息組件 ，提供 success , error ,
      warning , info 四種
    </v-chip>
    <v-container text-center>
      <v-btn color="success" @click="$successMsg('成功訊息')">success</v-btn>
      <v-btn color="warning" @click="$warningMsg('警告訊息')">warning</v-btn>
      <v-btn color="info" @click="$infoMsg('通知訊息')">info</v-btn>
      <v-btn color="error" @click="$errorMsg('錯誤訊息')">error</v-btn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class MessageTemplate extends Vue {}
</script>
