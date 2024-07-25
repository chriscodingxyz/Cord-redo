import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.MOVIE_API_KEY;

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
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    console.log("🎣 FETCHER[getMovieGenres] ===>>>", data.genres);
    return data.genres;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/movie/popular?page=1&api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`
    );
    console.log("🎣 FETCHER[getPopularMovies] ===>>>", data);
    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/movie/763215?api_key=fd2db60aefa24cc27c24f546c69f26d5
export const getMovieByID = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    console.log("🎣 FETCHER[getMovieByID] ===>>>", data);
    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

//https://api.themoviedb.org/3/search/movie?api_key=fd2db60aefa24cc27c24f546c69f26d5&query=batman&year=&page=1
//https://api.themoviedb.org/3/search/movie?api_key=fd2db60aefa24cc27c24f546c69f26d5&query=batman&year=&page=1&year=1999
export const getMovies = async (keyword: string, year?: number, page = 1) => {
  try {
    let url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`;

    if (year !== undefined) {
      url += `&year=${year}`;
    }

    const { data } = await axios.get(url);
    console.log("🎣 FETCHER[getMovies] ===>>>", data);

    return data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};
