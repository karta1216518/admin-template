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
  private TOGGLE_DATA({ type }: { type: AppStateKeys }) {
    this[type] = !this[type];
  }

  @Mutation
  private SET_DATA({ type, data }: { type: AppStateKeys; data: boolean }) {
    this[type] = data;
  }

  @Action
  public toggle({ type }: { type: AppStateKeys }) {
    this.TOGGLE_DATA({ type });
    // this.store.$router.push({ name: "inspire" });
  }

  @Action
  public setData({ type, data }: { type: AppStateKeys; data: boolean }) {
    this.SET_DATA({ type, data });
  }
}
