import { Resources } from '../types';

export namespace getAnimeSearchTypes {
  export type request = {
    page: number;
    limit: number;
    q?: string;
    type?: Resources.animeTypes;
    score?: number;
    min_score?: number;
    max_score?: number;
    rating?: Resources.animeRating;
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?: Resources.animeOrder | string;
    sort?: 'asc' | 'desc';
    letter?: string;
    producers?: string;
    start_date?: string;
    end_date?: string;
    status?: Resources.animeStatus;
  };
  export type response = {
    data: Resources.animeResources[];
    pagination: Resources.pagination;
  };
}
