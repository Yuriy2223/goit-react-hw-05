import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieListItem.module.css";
import { useMemo } from "react";

const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title, release_date, vote_average } = movie;
  // const imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "placeholder.jpg";

  const formattedDate = useMemo(() => {
    return release_date
      ? format(new Date(release_date), "dd MMM yyyy")
      : "No data";
  }, [release_date]);

  return (
    <li className={styles.item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <div className={styles.boxContent}>
          <img className={styles.img} src={imgSrc} alt={title || "Poster"} />
          <div className={styles.box}>
            <h2 className={styles.name}>{title || "No data"}</h2>
            <p className={styles.text}>{formattedDate}</p>
            <p className={styles.text}>Rating: {vote_average || "No data"}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;
