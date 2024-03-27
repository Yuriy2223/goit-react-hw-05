import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchTrendingMovies, MovieList } from "../../components/index";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const useFetch = (url) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(false);

          const response = await url();
          if (response) {
            setMovies(response);
          } else {
            toast.success("No movie found!");
          }
        } catch (error) {
          setError(`Network error: ${error}`);
          toast.error(`Network error: ${error}`);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);
  };

  useFetch(fetchTrendingMovies);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.errorLoading}>Error: {error}</div>;
  }

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
