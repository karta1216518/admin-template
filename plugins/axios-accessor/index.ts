import { Plugin } from "@nuxt/types";
import { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { initializeAxios } from "@/utils/pluginsInstance";

const accessor: Plugin = ({ error, app: { $axios } }) => {
  initializeAxios($axios);
  $axios.onRequest((config: AxiosRequestConfig) => {
    // TODO
    return config;
  });
  $axios.onError((e: AxiosError<any>) => {
    // TODO
  });
  // response攔截器，數據返回後，可以先在這裡進行一個簡單的判斷
  $axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      const res = response;
      if (res.status === 200) {
        return Promise.resolve(res);
      } else {
        return Promise.reject(res);
      }
    },
    (e: any) => {
      const { status, data } = e.response;
      error({ statusCode: status, message: data });
      return Promise.reject(e);
    }
  );
};

export default accessor;
