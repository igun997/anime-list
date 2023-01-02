export namespace getAnimeSearchTypes {
  export type animeTypes = 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
  export type animeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';
  export type animeStatus = 'airing' | 'completed' | 'tba' | 'upcoming';
  export type animeContributors = {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  };
  export type imageTypes = {
    image_url: string;
    large_image_url: string;
    small_image_url: string;
  };
  export type animeOrder =
    | 'mal_id'
    | 'score'
    | 'title'
    | 'start_date'
    | 'end_date'
    | 'type'
    | 'members'
    | 'id'
    | 'episodes'
    | 'rating';
  export type data = {
    mal_id: number;
    url: string;
    images: {
      jpg: imageTypes;
      webp: imageTypes;
    };
    trailer: {
      youtube_id: string;
      url: string;
      embed_url: string;
    };
    approved: boolean;
    titles: {
      type: string;
      title: string;
    }[];
    type: animeTypes;
    source: string | null;
    episodes: number | null;
    status: animeStatus;
    airing: boolean;
    aired: {
      from: string;
      to: string;
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
      };
    };
    duration: string | null;
    rating: animeRating;
    score: number;
    scored_by: number | null;
    rank: number | null;
    popularity: number | null;
    members: number | null;
    favorites: number | null;
    synopsis: string | null;
    background: string | null;
    year: number | null;
    broadcast: {
      day: string | null;
      time: string | null;
      timezone: string | null;
    };
    producers: animeContributors[];
    licensors: animeContributors[];
    studios: animeContributors[];
    genres: animeContributors[];
    explicit_genres: animeContributors[];
    themes: animeContributors[];
    demographic: animeContributors[];
  };
  export type pagination = {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  export type request = {
    page: number;
    limit: number;
    q?: string;
    type?: animeTypes;
    score?: number;
    min_score?: number;
    max_score?: number;
    rating?: animeRating;
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?: animeOrder;
    sort?: 'asc' | 'desc';
    letter?: string;
    producers?: string;
    start_date?: string;
    end_date?: string;
    status?: animeStatus;
  };
  export type response = {
    data: data[];
    pagination: pagination;
  };
}
