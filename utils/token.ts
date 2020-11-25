export function getLocalTokenData(token: string) {
  return JSON.stringify({
    token,
    age: +new Date() + 1000 * 60 * 60 * 24 * 7
  });
}

export function saveLocalToken(token: string, remeber = false) {
  const tokenData = getLocalTokenData(token);

  sessionStorage.setItem("token", tokenData);
  remeber && localStorage.setItem("token", tokenData);

}
