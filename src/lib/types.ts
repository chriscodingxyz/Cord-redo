// MovieListResponse remains the same
export interface MovieListResponse {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
}

// MovieSummary
export interface MovieSummary {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: MovieLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// MovieLanguage enum
export enum MovieLanguage {
  En = "en",
  Ja = "ja",
}

// below is a bit more detailed

// extend MovieSummary
export interface MovieDetails extends MovieSummary {
  belongs_to_collection: null | Collection; // Added Collection type
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

// New type for Collection
export interface Collection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Languages {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export interface RatingOptions {
  id: number;
  name: number;
}
