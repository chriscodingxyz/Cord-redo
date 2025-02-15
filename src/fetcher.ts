import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_DB_KEY = "fd2db60aefa24cc27c24f546c69f26d5";

const handleError = (error: AxiosError) => {
  if (error.response) {
    const errorMessage =
      (error.response.data as any).status_message || "Unknown error";
    throw new Error(`Error ${error.response.status}: ${errorMessage}`);
  } else if (error.request) {
    throw new Error("No response received from server");
  } else {
    throw new Error(`Error: ${error.message}`);
  }
};

// https://api.themoviedb.org/3/genre/movie/list?api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getMovieGenres = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${MOVIE_DB_KEY}`
    );
    // console.log("🎣 FETCHER[getMovieGenres] ===>>>", data.genres);
    return data.genres;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/movie/popular?page=1&api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/popular?page=${page}&api_key=${MOVIE_DB_KEY}`
    );
    // console.log("🎣 FETCHER[getPopularMovies] ===>>>", data);
    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/movie/763215?api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getMovieByID = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${MOVIE_DB_KEY}`
    );
    // console.log("🎣 FETCHER[getMovieByID] ===>>>", data);
    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/search/movie?api_key=fd2db60aefa24cc27c24f546c69f26d5&query=batman&year=&page=1
//https://api.themoviedb.org/3/search/movie?api_key=fd2db60aefa24cc27c24f546c69f26d5&query=batman&year=&page=1&year=1999
export const getMovies = async (keyword: string, year = 0, page = 1) => {
  const url = `${BASE_URL}/search/movie?api_key=${MOVIE_DB_KEY}&query=${keyword}&page=${page}&year=${year}`;
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${MOVIE_DB_KEY}&query=${keyword}&page=${page}&year=${year}`
    );
    // console.log("🎣 FETCHER[getMovies] ===>>>", data);

    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

export const getLanguages = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/configuration/languages?api_key=${MOVIE_DB_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};
