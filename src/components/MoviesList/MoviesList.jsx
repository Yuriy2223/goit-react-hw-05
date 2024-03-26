import MovieListItem from "../MovieListItem/MovieListItem";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
