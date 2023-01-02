import { initializeHttp } from '../../configs/http.config';
import { API_HOST } from '../../constants/http.constant';
import { getAnimeSearchTypes } from '../../types/services/getAnimeSearchTypes';

const http = initializeHttp(API_HOST ?? '');
/**
 * @description Get anime search
 * @param params: getAnimeSearchTypes.request
 * @returns Promise<getAnimeSearchTypes.response>
 */
export const getAnimeSearch = (params: getAnimeSearchTypes.request) => {
  return http
    .get('anime', {
      params,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    }) as Promise<getAnimeSearchTypes.response>;
};
