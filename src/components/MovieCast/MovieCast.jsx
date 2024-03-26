import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCreditsById } from "../index";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) return;

    async function fetchDataByQuery() {
      try {
        const response = await fetchMovieCreditsById(movieId);
        if (response) {
          setCast(response);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchDataByQuery();
  }, [movieId]);

  return (
    <>
      {error && <div className={styles.errorLoading}>Error: {error}</div>}
      {cast?.length !== 0 && (
        <ul className={styles.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img
                className={styles.img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={250}
              />
              <p className={styles.name}>{actor.name}</p>
              <p className={styles.text}>
                Character:<br></br> {actor.character}
              </p>
            </li>
          ))}
        </ul>
      )}
      {cast?.length === 0 && !error && (
        <p className={styles.errorLoading}>
          No cast information available for this movie.
        </p>
      )}
    </>
  );
};

export default MovieCast;
