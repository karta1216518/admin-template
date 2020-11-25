import { Store, ActionTree } from "vuex";
import { getModule } from "vuex-module-decorators";
import User from "~/store/user";
import Example from "~/store/example";
import App from "~/store/app";

interface RootState {
  exampleModule: Example;
  appModule: App;
  userModule: User;
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit(_context, _server: { req: any; app: Vue }) {
    console.log({ _context });
  }
};

let ExampleModule: Example, AppModule: App, UserModule: User;

function initialiseStores(store: Store<any>): void {
  ExampleModule = getModule(Example, store);
  AppModule = getModule(App, store);
  UserModule = getModule(User, store);
}

export { initialiseStores, ExampleModule, AppModule, UserModule };
