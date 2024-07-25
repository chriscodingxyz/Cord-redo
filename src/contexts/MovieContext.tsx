import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import * as fetcher from "../fetcher";
import {
  MovieSummary,
  MovieDetails,
  Genre,
  MovieListResponse,
} from "../lib/types";

interface MovieContextType {
  genreOptions: Genre[];
  languageOptions: { id: string; name: string }[];
  ratingOptions: { id: number; name: number }[];
  totalCount: number;
  results: MovieSummary[];
  movieDetails: MovieDetails | null;
  isLoading: boolean;
  error: string | null;
  activeSideBar: boolean;
  searchPopularMovies: () => Promise<void>;
  searchGenres: () => Promise<void>;
  searchMovieByID: (movieId: number) => Promise<void>;
  searchMovies: (keyword: string, year: number) => Promise<void>;
  setActiveSideBar: (active: boolean) => void;
  toggleSideBar: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const [genreOptions, setGenreOptions] = useState<Genre[]>([]);
  const [languageOptions, setLanguageOptions] = useState<
    { id: string; name: string }[]
  >([]);
  const [ratingOptions, setRatingOptions] = useState<
    { id: number; name: number }[]
  >([]);
  const [totalCount, setTotalCount] = useState(0);
  const [results, setResults] = useState<MovieSummary[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleSideBar = () => {
    setActiveSideBar((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([searchPopularMovies(), searchGenres()]);
      } catch (error) {
        console.error("Error fetching initial data:", error);
        setError("Failed to load initial data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActiveSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchPopularMovies = async () => {
    try {
      const result: MovieListResponse = await fetcher.getPopularMovies();
      setResults(result.results);
      setTotalCount(result.total_results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      setError("Failed to fetch popular movies");
    }
  };

  const searchGenres = async () => {
    try {
      const result: { genres: Genre[] } = await fetcher.getMovieGenres();
      setGenreOptions(result.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
      setError("Failed to fetch genres");
    }
  };

  const searchMovieByID = async (movieId: number) => {
    try {
      const result: MovieDetails = await fetcher.getMovieByID(movieId);
      setMovieDetails(result);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError("Failed to fetch movie details");
    }
  };

  const searchMovies = async (keyword: string, year: number) => {
    try {
      const result: MovieListResponse = await fetcher.getMovies(keyword, year);
      setResults(result.results);
      setTotalCount(result.total_results);
    } catch (error) {
      console.error("Error searching movies:", error);
      setError("Failed to search movies");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        genreOptions,
        languageOptions,
        ratingOptions,
        totalCount,
        results,
        movieDetails,
        isLoading,
        error,
        activeSideBar,
        searchPopularMovies,
        searchGenres,
        searchMovieByID,
        searchMovies,
        setActiveSideBar,
        toggleSideBar,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
