import MovieCards from "../MovieCards/MovieCards";
import styles from "./MovieCardsWrapper.module.css";
function MovieCardsWrapper({ movieData, searchTerm, loading }) {
  return (
    <div className={styles.movieCardWrapper}>
      <MovieCards
        movieData={movieData}
        searchTerm={searchTerm}
        loading={loading}
      />
    </div>
  );
}

export default MovieCardsWrapper;
