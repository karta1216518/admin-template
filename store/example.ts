import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "example",
  namespaced: true,
  stateFactory: true
})
export default class Example extends VuexModule {
  public test: string = "initial";

  @Mutation
  private SET_DATA(val: string) {
    this.test = val;
  }

  @Action
  public setTest(val: string) {
    this.SET_DATA(val);
  }
}
