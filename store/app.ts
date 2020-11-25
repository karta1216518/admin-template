import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

interface AppState {
  rightDrawer: boolean;
  miniVariant: boolean;
  drawer: boolean;
}
export type AppStateKeys = keyof AppState;

@Module({ namespaced: true, stateFactory: true, name: "app" })
export default class App extends VuexModule implements AppState {
  rightDrawer = false;
  miniVariant = false;
  drawer = false;

  @Mutation
  private TOGGLE_DATA(type: AppStateKeys, data?: boolean) {
    if (data && typeof data === "boolean") {
      this[type] = data;
    } else {
      this[type] = !this[type];
    }
  }

  @Action
  public toggle(type: AppStateKeys, data?: boolean) {
    this.TOGGLE_DATA(type, data);
    // this.store.$router.push({ name: "inspire" });
  }
}
