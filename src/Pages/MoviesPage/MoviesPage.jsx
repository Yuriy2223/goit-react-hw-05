import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovieDetails, MoviesList, SearchBar } from "../../components";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetchMovieDetails(query);
        if (response) {
          setMovies(response);
        } else {
          toast.success("No movies found!");
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
        toast.error(`Network error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [query]);

  const onSearchHandler = (query) => {
    navigate(query ? `?query=${query}` : "/");
  };

  return (
    <div className={styles.moviesPage}>
      <SearchBar onSubmit={onSearchHandler} />
      {!isError && isLoading}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
