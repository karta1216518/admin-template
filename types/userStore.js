import * as SYSTEM_API from "@/api/systemApi.json";
import * as ADMIN_API from "@/api/adminApi.json";
import { getErrorMsgFunc } from "~/utils/message";
import { saveLocalToken } from "~/utils/token";

const loginErrorMsg = getErrorMsgFunc("登入失敗，請重新整理或稍後在試 !");

export const state = () => ({
  token: "",
  userInfo: { name: "", permGroupName: "", photoUrl: "" }
});

export const mutations = {
  setData(state, { type, data }) {
    state[type] = data;
  }
};

export const actions = {
  // 登入
  async login({ commit, dispatch }, data) {
    const { account, password, remeber } = data;
    return this.$axios
      .$post(SYSTEM_API.login, { account, password })
      .then(async ({ code, data }) => {
        if (+code === 0 || +code === 3) {
          const { token = "" } = data;
          saveLocalToken(token);

          this.$axios.setHeader("token", token);
          commit("setData", { type: "token", data: token });

          try {
            // 取得權限 & 使用者資料
            await dispatch("getUserInfo");
            this.$successMsg(`登入成功 !`);
          } catch {
            this.$errorMsg(loginErrorMsg(code));
          }
        } else {
          this.$errorMsg(loginErrorMsg(code));
        }
      });
  },

  async getUserInfo({ commit, dispatch }) {
    return this.$axios
      .$post(ADMIN_API.getUserInfo, null)
      .then(({ code, data }) => {
        if (+code === 0) {
          commit("setData", {
            type: "userInfo",
            data
          });
        } else {
          dispatch("resetToken");
        }
      });
  },

  // 清除登入狀態
  resetToken({ commit }) {
    if (process.server) return;
    localStorage.setItem("token", "");
    sessionStorage.setItem("token", "");
    commit("setToken", "");
    commit("cleanUserData");
    commit("permStore/cleanAuth", null, { root: true });
  },

  // 登出
  logout({ dispatch }) {
    this.$axios.$post(SYSTEM_API.logout, null).then(({ code, msg }) => {
      if (+code === 0) {
        dispatch("resetToken");
        this.$successMsg("登出成功");
        this.$router.push({ name: "login" });
      } else {
        this.$errorMsg(msg);
      }
    });
  }
};
