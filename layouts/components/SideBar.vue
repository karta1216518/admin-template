<template>
  <v-navigation-drawer
    :value="drawer"
    color="#E1F5FE"
    :mini-variant="miniVariant"
    app
  >
    <v-card height="100%" rounded="0">
      <v-img
        class="white--text"
        :aspect-ratio="1.15"
        src="https://cdn2.ettoday.net/images/802/802475.jpg"
      >
        <v-card-title v-show="!miniVariant">肥豬模板</v-card-title>
      </v-img>
      <v-list class="sidebarMenus">
        <SideBarItem
          v-for="(route, i) in routes"
          :key="i"
          :route="route"
          :miniVariant="miniVariant"
          @open-side-bar="toggle('miniVariant')"
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

  get drawer() {
    return AppModule.drawer;
  }

  routes = routeSetting.routes;

  toggle(type: AppStateKeys, data: boolean = false) {
    AppModule.toggle(type, data);
  }

  drawerToggle(data: boolean) {
    AppModule.toggle("drawer", data);
  }
}
</script>
