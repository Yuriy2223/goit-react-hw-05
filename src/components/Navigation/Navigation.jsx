import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={
          location.pathname === "/"
            ? `${styles["home-page"]} ${styles["active-page"]}`
            : styles["home-page"]
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={
          location.pathname.startsWith("/movies")
            ? `${styles["movies-page"]} ${styles["active-page"]}`
            : styles["movies-page"]
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
