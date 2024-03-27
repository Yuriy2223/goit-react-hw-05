import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovieDetailsById } from "../../components/index";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHome = useRef(location.state?.from || "/movies");
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) return;

    async function fetchDataByQuery() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchMovieDetailsById(movieId);
        if (response) {
          setMovie(response);
        } else {
          toast.success("No movie found!");
        }
      } catch (error) {
        setError(`Network error: ${error}`);
        toast.error(`Network error: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchDataByQuery();
  }, [movieId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.pages}>
        {error && <div className={styles.errorLoading}>Error: {error}</div>}
      </div>
      <div className={styles.page}>
        <div className={styles.box}>
          <img
            className={styles.img}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="Poster"
          />
          <div className={styles.boxText}>
            <h1 className={styles.title}>
              {movie.title}{" "}
              {movie.release_date
                ? `(${movie.release_date.substring(0, 4)})`
                : ""}
            </h1>
            <p className={styles.userScore}>
              User Score:
              {movie.vote_average ? Math.round(movie.vote_average * 10) : 0}%
            </p>
            <h2 className={styles.overview}>Overview</h2>
            <p className={styles.overviewText}>{movie.overview}</p>
            <h3 className={styles.genresTitle}>Genres :</h3>
            <ul className={styles.genresList}>
              {movie.genres &&
                movie.genres.map((item) => (
                  <li key={item.id} className={styles.genresItem}>
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div>
          <p className={styles.informText}>Additinal information</p>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="cast"
                className={({ isActive }) =>
                  isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.btn} to={goBackHome.current}>
                Go Back
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
