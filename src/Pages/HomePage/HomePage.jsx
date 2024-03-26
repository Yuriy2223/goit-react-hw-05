import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchTrendingMovies, MoviesList } from "../../components/index";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetchTrendingMovies();
        if (response) {
          setMovies(response);
        } else {
          toast.success("Щось пішло не так... 😔");
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
        toast.error(`Щось пішло не так... 😔: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Trending movies</h1>
      {!isError && isLoading}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
