import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovieDetails, MovieList, SearchBar } from "../../components";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    async function fetchDataByQuery() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetchMovieDetails(query);
        if (response) {
          setMovies(response);
        } else {
          toast.success("No movies found!");
        }
      } catch (error) {
        setError(`Network error: ${error}`);
        toast.error(`Network error: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchDataByQuery();
  }, [query]);

  const onSearchHandler = (query) => {
    navigate(query ? `?query=${query}` : "/");
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.errorLoading}>Error: {error}</div>;
  }

  return (
    <div className={styles.moviesPage}>
      <SearchBar onSubmit={onSearchHandler} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
