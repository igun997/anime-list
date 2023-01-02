import { Resources } from '../types';

export namespace getAnimeGenresTypes {
  export type request = {
    filter: 'genres' | 'explicit_genres' | 'themes' | 'demographic';
  };
  export type response = {
    data: Resources.animeGenres[];
  };
}
