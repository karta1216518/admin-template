<template>
  <div>
    <div class="wifeContainer" :class="{ active }">
      <canvas id="live2d" :width="width" :height="height"></canvas>
    </div>
    <div class="toggleBtn" @click="active = !active">㊣</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import "@/plugins/live2d/source";
import eventBus from "@/utils/eventBus";

@Component({ components: {} })
export default class Wife extends Vue {
  @Prop({ default: 400 }) width!: number;
  @Prop({ default: 600 }) height!: number;

  active = false;

  wifeList: string[] = [
    "../live2dModel/ya/model.json"
    // "../live2dModel/i401/model.json"
    // "../live2dModel/ki/model.json"
    // "../live2dModel/Kiro/model.json",
  ];

  async mounted() {
    this.loadWife();
    eventBus.$on("live2dShow", () => (this.active = !this.active));
  }

  loadWife() {
    loadlive2d(
      "live2d",
      this.wifeList[(Math.random() * this.wifeList.length) >> 0]
    );
  }
}
</script>

<style lang="sass" scoped>

.wifeContainer
  position: fixed
  bottom: -100px
  right: -50px
  transform: translateY(100%)
  transition: transform 0.8s
  z-index: 10000
  pointer-events: none
  &.active
    transform: translateY(0%)

.toggleBtn
  width: 30px
  height: 30px
  position: fixed
  z-index: 10001
  bottom: 0
  right: 0
  cursor: pointer
</style>
