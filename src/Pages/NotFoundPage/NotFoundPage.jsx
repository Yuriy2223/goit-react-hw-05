import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.box}>
      Page not found!
      <br />
      <Link className={styles.link} to="/">
        Home
      </Link>
      .
    </div>
  );
};

export default NotFoundPage;
