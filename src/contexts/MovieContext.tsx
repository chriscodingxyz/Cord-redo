import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import * as fetcher from "../fetcher";
import {
  MovieSummary,
  MovieDetails,
  Genre,
  MovieListResponse,
  Languages,
} from "../lib/types";

interface MovieContextType {
  genres: Genre[];
  languageOptions: { id: string; name: string }[];
  totalCount: number;
  results: MovieSummary[];
  movieDetails: MovieDetails | null;
  isLoading: boolean;
  error: string | null;
  activeSideBar: boolean;
  getGenreNames: (genreIds: number[]) => string;
  searchPopularMovies: () => Promise<void>;
  searchGenres: () => Promise<void>;
  searchMovieByID: (id: number) => Promise<void>;
  searchMovies: (keyword: string, year: number) => Promise<void>;
  setActiveSideBar: (active: boolean) => void;
  toggleSideBar: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  year: number;
  setYear: (year: number) => void;
  languages: Languages[];
  setLanguages: (languages: Languages[]) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [year, setYear] = useState<number>(0);
  const [activeSideBar, setActiveSideBar] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(
    window.innerWidth >= 1024
  );

  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [languageOptions, setLanguageOptions] = useState<
    { id: string; name: string }[]
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
        const [popMovies, fetchedGenres, langs] = await Promise.all([
          searchPopularMovies(),
          searchGenres(),
          searchLanguages(),
        ]);
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

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsFilterOpen(true);
    } else {
      setIsFilterOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const searchPopularMovies = async (): Promise<void> => {
    try {
      const result = await fetcher.getPopularMovies();
      setResults(result.results);
      setTotalCount(result.total_results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      setError("Failed to fetch popular movies");
      throw error;
    }
  };

  const searchGenres = async (): Promise<void> => {
    try {
      const genres = await fetcher.getMovieGenres();
      // console.log("🎣 CONTEXT[searchGenres] ===>>>", genres);
      setGenres(genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
      setError("Failed to fetch genres");
      throw error;
    }
  };

  const searchMovieByID = async (movieId: number): Promise<void> => {
    try {
      const result: MovieDetails = await fetcher.getMovieByID(movieId);
      setMovieDetails(result);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError("Failed to fetch movie details");
      throw error;
    }
  };

  const searchMovies = async (keyword: string, year: number): Promise<void> => {
    try {
      const result: MovieListResponse = await fetcher.getMovies(keyword, year);
      setResults(result.results);
      setTotalCount(result.total_results);
    } catch (error) {
      console.error("Error searching movies:", error);
      setError("Failed to search movies");
      throw error;
    }
  };

  const searchLanguages = async (): Promise<void> => {
    try {
      const languages = await fetcher.getLanguages();
      // console.log("🎣 CONTEXT[searchLanguages] ===>>>", languages);
      setLanguages(languages);
    } catch (error) {
      console.error("Error fetching languages:", error);
      setError("Failed to fetch languages");
      throw error;
    }
  };

  const getGenreNames = (genreIds: number[]): string => {
    if (!genres || genres.length === 0) return "";
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(" | ");
  };

  return (
    <MovieContext.Provider
      value={{
        genres,
        languageOptions,
        totalCount,
        results,
        movieDetails,
        isLoading,
        error,
        activeSideBar,
        getGenreNames,
        searchPopularMovies,
        searchGenres,
        searchMovieByID,
        searchMovies,
        setActiveSideBar,
        toggleSideBar,
        setSearchQuery,
        searchQuery,
        year,
        setYear,
        languages,
        setLanguages,
        isFilterOpen,
        setIsFilterOpen,
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
