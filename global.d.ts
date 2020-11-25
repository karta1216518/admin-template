import Vue, { VueConstructor } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $successMsg: any;
    $warningMsg: any;
    $infoMsg: any;
    $errorMsg: any;
  }
  interface VueConstructor {
    $successMsg: any;
    $warningMsg: any;
    $infoMsg: any;
    $errorMsg: any;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    $successMsg?: any;
    $warningMsg?: any;
    $infoMsg?: any;
    $errorMsg?: any;
  }
}

declare module "*.vue" {
  export default Vue;
}

declare module "vuex-module-decorators" {
  interface VuexModule {
    store: any;
  }
}
