import { initializeHttp } from '../../configs/http.config';
import { API_HOST } from '../../constants/http.constant';

const http = initializeHttp(API_HOST ?? '');

export const getAuthToken = (body: { email: string; password: string; captcha: string }) => {
  return http
    .post('auth/login', body)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getMe = () => {
  return http
    .get('auth/me')
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const logout = () => {
  return http
    .post('auth/logout')
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
