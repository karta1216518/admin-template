import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

type IUser = keyof User;

@Module({
  name: "example",
  namespaced: true,
  stateFactory: true
})
export default class User extends VuexModule {
  public token = "";
  public userInfo = "";

  @Mutation
  private SET_DATA(type: IUser, val: string) {
    this[type] = val;
  }

  @Action
  public setData({ type, val }: { type: IUser; val: string }) {
    this.SET_DATA(type, val);
  }

  @Action
  public getUserInfo() {
    this.SET_DATA("userInfo", "aaa");
  }
}
