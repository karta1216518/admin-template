<template>
  <v-navigation-drawer :value="rightDrawer" right temporary fixed>
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

@Component({ components: {} })
export default class Drawer extends Vue {
  @State(state => state.app.rightDrawer) rightDrawer!: boolean;
}
</script>
