<template>
  <v-container class="d-flex align-center fill-height">
    <v-card class="mx-auto elevation-4 mb-12" width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>管理員登入</v-card-title>
      </v-img>

      <v-container class="px-5 pt-5">
        <v-text-field
          label="帳號"
          placeholder="Placeholder"
          outlined
        ></v-text-field>

        <v-text-field
          label="密碼"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-container>

      <v-card-actions class="justify-center pb-5">
        <v-btn color="orange" width="46%" outlined>
          <v-icon>mdi-autorenew</v-icon>
          清除
        </v-btn>

        <v-btn color="primary" width="46%" outlined @click="login">
          <v-icon>mdi-login-variant</v-icon>
          登入
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {}, layout: "full" })
export default class Login extends Vue {
  login(): void {
    this.$router.push({ name: "index" });
  }
}
</script>

<style lang="sass"></style>
