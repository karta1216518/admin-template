const API_ERROR_MSG: { [x: string]: string } = require("@/setting/error.json");

export function getErrorMsg(code: string) {
  return API_ERROR_MSG[code] || "連接伺服器失敗，請重新整理或稍後在試 !";
}

export function getErrorMsgFunc(defaultMsg: string) {
  return (code: string) => API_ERROR_MSG[code] || defaultMsg;
}
