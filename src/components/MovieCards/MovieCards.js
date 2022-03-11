import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = ({ movieData, searchTerm, loading }) => {
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard
        movieData={movieData}
        searchTerm={searchTerm}
        loading={loading}
      />
    </div>
  );
};
export default MovieCards;
