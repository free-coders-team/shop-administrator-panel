import Cookies from "js-cookie";

export const removeCookie = (key: string) => Cookies.remove(key);

export const createCookie = (key: string, value: string, expires: number | Date) => {
  return Cookies.set(key, value, {
    expires,
  });
};
