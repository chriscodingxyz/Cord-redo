import axios from "axios";
import {
  getMovieGenres,
  getPopularMovies,
  getMovieByID,
  getMovies,
  getLanguages,
} from "../fetcher";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Fetcher functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getMovieGenres", () => {
    it("should fetch movie genres successfully", async () => {
      const mockData = { genres: [{ id: 1, name: "Action" }] };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getMovieGenres();
      expect(result).toEqual(mockData.genres);
    });

    it("should handle errors", async () => {
      mockedAxios.get.mockRejectedValueOnce({
        response: { status: 404, data: { status_message: "Not Found" } },
      });

      await expect(getMovieGenres()).rejects.toThrow("Error 404: Not Found");
    });
  });

  describe("getPopularMovies", () => {
    it("should fetch popular movies successfully", async () => {
      const mockData = { results: [{ id: 1, title: "Popular Movie" }] };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getPopularMovies();
      expect(result).toEqual(mockData);
    });
  });

  describe("getMovieByID", () => {
    it("should fetch a movie by ID successfully", async () => {
      const mockData = { id: 1, title: "Test Movie" };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getMovieByID(1);
      expect(result).toEqual(mockData);
    });
  });

  describe("getMovies", () => {
    it("should search movies successfully", async () => {
      const mockData = { results: [{ id: 1, title: "Batman" }] };
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getMovies("Batman");
      expect(result).toEqual(mockData);
    });
  });

  describe("getLanguages", () => {
    it("should fetch languages successfully", async () => {
      const mockData = [{ iso_639_1: "en", english_name: "English" }];
      mockedAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getLanguages();
      expect(result).toEqual(mockData);
    });

    it("should handle errors", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

      await expect(getLanguages()).rejects.toThrow("Network Error");
    });
  });
});
