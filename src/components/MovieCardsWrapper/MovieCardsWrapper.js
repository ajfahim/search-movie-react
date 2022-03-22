import MovieCards from "../MovieCards/MovieCards";
import styles from "./MovieCardsWrapper.module.css";
function MovieCardsWrapper({ filteredMovie, searchTerm, loading }) {
  return (
    <div className={styles.movieCardWrapper}>
      <MovieCards
        filteredMovie={filteredMovie}
        searchTerm={searchTerm}
        loading={loading}
      />
    </div>
  );
}

export default MovieCardsWrapper;
