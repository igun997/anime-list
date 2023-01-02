import { initializeHttp } from '../../configs/http.config';
import { API_HOST } from '../../constants/http.constant';
import { getAnimeSearchTypes } from '../../types/services/getAnimeSearchTypes';
import { getAnimeByIdTypes } from '../../types/services/getAnimeByIdTypes';
import { getAnimeGenresTypes } from '../../types/services/getAnimeGenresTypes';

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
/**
 * @description Get anime genres
 * @param params getAnimeGenresTypes.request
 * @returns Promise<getAnimeGenresTypes.response>
 */
export const getAnimeGenres = (params: getAnimeGenresTypes.request) => {
  return http
    .get('genres/anime', {
      params,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    }) as Promise<getAnimeGenresTypes.response>;
};
