<template>
  <v-list-item
    color="primary"
    :to="route.to"
    router
    exact
    v-if="!route.children"
    @click="holdSideBar"
  >
    <v-list-item-action>
      <v-icon>{{ route.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="route.title" />
    </v-list-item-content>
  </v-list-item>

  <v-list-group
    ref="list-group"
    :prepend-icon="route.icon"
    no-action
    dense
    v-else
    @click="holdSideBar"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ route.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-divider></v-divider>

    <v-list-item
      :to="route.to + child.to"
      router
      dense
      exact
      v-for="(child, i) in route.children"
      :key="i"
    >
      <v-list-item-title v-text="child.title" />
      <v-list-item-icon>
        <v-icon v-text="child.icon || ''"></v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-divider></v-divider>
  </v-list-group>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { IRoute } from "@/models/RouteDTO";

@Component({ components: {} })
export default class SideBarItem extends Vue {
  @Prop({ required: true }) route!: IRoute;
  @Prop({ required: true }) miniVariant!: boolean;
  @Watch("miniVariant")
  onCloseSideBar(val: boolean) {
    const group: any = this.$refs["list-group"];
    // val && group && (group.isActive = false);
  }

  holdSideBar(): void {
    console.log("holdSideBar");
    this.$emit("open-side-bar", false);
  }
}
</script>
