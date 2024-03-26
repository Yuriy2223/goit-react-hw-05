import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../index";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const response = await fetchMovieReviewsById(movieId);
        if (response) {
          setReviews(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [movieId]);

  return (
    <div className={styles.box}>
      {isLoading && <div className={styles.loading}>Loading...</div>}
      {!isLoading && reviews?.length !== 0 && (
        <ul className={styles.list}>
          {reviews?.map((item) => (
            <li key={item.id} className={styles.item}>
              <p className={styles.author}>
                Author : {item.author_details.username}
              </p>
              <p className={styles.text}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && reviews?.length === 0 && (
        <p className={styles.errorLoading}>
          No reviews available for this movie.
        </p>
      )}
    </div>
  );
};

export default MovieReviews;
