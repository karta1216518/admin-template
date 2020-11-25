<template>
  <v-navigation-drawer
    :value="rightDrawer"
    @input="setRightDrawer"
    right
    temporary
    fixed
  >
    <v-card class="p-5" height="100%" rounded="0">
      <v-btn outlined color="primary">
        <v-icon light>
          mdi-repeat
        </v-icon>
        登出
      </v-btn>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, State } from "nuxt-property-decorator";
import { AppModule } from "@/store";

@Component({ components: {} })
export default class Drawer extends Vue {
  @State(state => state.app.rightDrawer) rightDrawer!: boolean;

  setRightDrawer(data: boolean = false) {
    AppModule.setData({ type: "rightDrawer", data });
  }
}
</script>
