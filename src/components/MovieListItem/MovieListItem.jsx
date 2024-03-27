import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieListItem.module.css";
import { useMemo } from "react";

const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title, release_date, vote_average } = movie;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImg;

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
