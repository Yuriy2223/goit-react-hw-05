import axios from "axios";
const TMDB_API_KEY = "24021432dbf2240d631ed1a5f04e0c9f";

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
}

export async function fetchMovieDetails(movieName) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movieName}`
  );
  return response.data.results;
}

export async function fetchMovieDetailsById(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
  );
  return response.data;
}

export async function fetchMovieCreditsById(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`
  );
  return response.data.cast;
}

export async function fetchMovieReviewsById(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
}

export { default as MovieList } from "./MovieList/MovieList";
export { default as MovieListItem } from "./MovieListItem/MovieListItem";
export { default as Navigation } from "../components/Navigation/Navigation";
export { default as MovieDetailsPage } from "../pages/MovieDetailsPage/MovieDetailsPage";
export { default as SearchBar } from "../components/SearchBar/SearchBar";
export { default as MovieCast } from "../components/MovieCast/MovieCast";
export { default as MovieReviews } from "../components/MovieReviews/MovieReviews";
