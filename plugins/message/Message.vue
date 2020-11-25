<template>
  <div :class="wrapClasses" :style="`z-index:${+nId + 10000} ; top:${top}`">
    <v-icon color="#FFF" class="mr-2">{{ iconType }}</v-icon>
    <span>
      {{ message }}
    </span>
    <v-icon color="#eee" class="ml-auto pl-4" dense @click="close"
      >mdi-close</v-icon
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";

const PRE_FIX_CLS = "pop-message";
const TYPES_ICON = {
  success: "emoticon-cool",
  warning: "emoticon-confused",
  info: "information",
  error: "emoticon-dead"
};

@Component({ components: {} })
export default class MessageHandler extends Vue {
  @Watch("alive")
  animateStart(val: boolean) {
    if (!val) return;
    this.$nextTick(() => {
      this.isAnimateStart = true;
    });
  }

  alive = false;
  isAnimateStart = false;

  type: "success" | "warning" | "info" | "error" = "info";
  top = "20px"; // default
  message = "";

  duration = 5000; // default
  nId = 0;

  get iconType(): string {
    return "mdi-" + TYPES_ICON[this.type];
  }
  get wrapClasses(): string[] {
    return [
      "elevation-2",
      `${PRE_FIX_CLS}`,
      `${PRE_FIX_CLS}-${this.type}`,
      this.isAnimateStart ? `${PRE_FIX_CLS}-active` : ""
    ];
  }

  mounted() {
    +this.duration &&
      setTimeout(() => {
        this.close();
      }, this.duration);
  }

  async close() {
    this.isAnimateStart = false;
    setTimeout(() => {
      this.$destroy();
      this.$el.parentNode?.removeChild(this.$el);
    }, 1000);
  }
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
@import '../../assets/sass/common'

.pop-message
  +font()
  position: fixed
  display: flex
  left: 50%
  min-height: 40px
  line-height: 30px
  min-width: 360px
  max-width: 600px
  transform: translate(-50%,-200%)
  padding: 4px 10px
  border-radius: 2px
  transition: transform .5s
  color: #fff
  >.v-icon
    max-height: 30px
  &-active
    transform: translate(-50%,0)
  &-success
    background-color: #43A047
  &-error
    background-color: #E53935
  &-info
    background-color: #455A64
  &-warning
    background-color: #F9A825
</style>
