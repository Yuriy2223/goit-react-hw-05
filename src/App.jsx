import { Routes, Route } from "react-router-dom";
import { HomePage, MoviesPage, NotFoundPage } from "./pages";
import Navigation from "./components/Navigation/Navigation";
import { Suspense, lazy } from "react";
import "./App.css";

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <header className="header">
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
