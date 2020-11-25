import { Middleware } from "@nuxt/types";
import { UserModule } from "@/store";

const auth: Middleware = ({ route, redirect }) => {
  if (UserModule.token) {
    if (route.path === "/login") {
      return redirect("/");
    }
    if (UserModule.userInfo === "") {
      try {
        return UserModule.getUserInfo();
      } catch {}
    }
  } else if (route.path !== "/login") {
    return redirect({
      path: "/login",
      query: { redirect: route.fullPath }
    });
  }
};

export default auth;
