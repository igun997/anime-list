import { Resources } from '../types';

export namespace getAnimeByIdTypes {
  export type request = {
    id: number;
  };
  export type response = {
    data: Resources.animeResources;
  };
}
