<template>
  <v-navigation-drawer
    :value="drawer"
    color="#E1F5FE"
    :mini-variant="miniVariant"
    @input="setDrawer"
    app
  >
    <v-card height="100%" rounded="0">
      <v-img
        class="white--text"
        :aspect-ratio="1.15"
        src="https://imgur.dcard.tw/zrnIPPQb.jpg"
      >
        <v-card-title v-show="!miniVariant">微厝 - 總部管理系統</v-card-title>
      </v-img>
      <v-list class="sidebarMenus">
        <SideBarItem
          v-for="(route, i) in routes"
          :key="i"
          :route="route"
          :miniVariant="miniVariant"
          @open-side-bar="setMiniVariant"
        ></SideBarItem>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, State, Watch } from "nuxt-property-decorator";
import SideBarItem from "@/layouts/components/SideBarItem.vue";
import { AppModule } from "@/store";
import { AppStateKeys } from "@/store/app";

const routeSetting = require("@/setting/routes.json");

@Component({ components: { SideBarItem } })
export default class SideBar extends Vue {
  @State(state => state.app.miniVariant) miniVariant!: boolean;
  @State(state => state.app.drawer) drawer!: boolean;

  // get drawer() {
  //   return AppModule.drawer;
  // }

  routes = routeSetting.routes;

  setMiniVariant(data: boolean = false) {
    AppModule.setData({ type: "miniVariant", data });
  }

  setDrawer(data: boolean = false) {
    AppModule.setData({ type: "drawer", data });
  }
}
</script>
