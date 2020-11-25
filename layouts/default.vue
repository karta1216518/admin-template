<template>
  <v-app>
    <SideBar></SideBar>

    <v-app-bar color="#124c87" elevation="1" app dense dark>
      <v-btn icon @click.stop="toggle('miniVariant')">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="toggle('drawer')" />

      <v-spacer />

      <v-btn icon @click.stop="toggle('rightDrawer')">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="pb-12">
        <nuxt />
      </v-container>
    </v-main>

    <Drawer></Drawer>

    <Wife></Wife>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, State } from "nuxt-property-decorator";
import { AppModule } from "@/store";
import { AppStateKeys } from "@/store/app";

import SideBar from "./components/SideBar.vue";
import Drawer from "./components/Drawer.vue";
import Wife from "@/components/Wife/index.vue";

@Component({ components: { SideBar, Drawer, Wife } })
export default class DefaultLayout extends Vue {
  get miniVariant() {
    return AppModule.miniVariant;
  }

  toggle(type: AppStateKeys) {
    AppModule.toggle(type);
  }

  mounted() {}
}
</script>

<style lang="sass"></style>
