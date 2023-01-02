import { initializeHttp } from '../../configs/http.config';
import { API_HOST } from '../../constants/http.constant';
import { getAnimeSearchTypes } from '../../types/services/getAnimeSearchTypes';
import { getAnimeByIdTypes } from '../../types/services/getAnimeById';

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

/**
 * @description Get anime by id
 * @param params getAnimeByIdTypes.request
 * @returns Promise<getAnimeByIdTypes.response>
 */
export const getAnimeById = (params: getAnimeByIdTypes.request) => {
  return http
    .get(`anime/${params.id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    }) as Promise<getAnimeByIdTypes.response>;
};
