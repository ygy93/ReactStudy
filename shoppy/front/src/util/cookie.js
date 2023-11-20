import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, option);
} // 생성

export const getCookie = (name) => {
  return cookies.get(name)
} // 가져오기, 네비바에서 회원쿠키확인해야함

export const removeCookie = (name) => {
  return cookies.remove(name);
} // 삭제