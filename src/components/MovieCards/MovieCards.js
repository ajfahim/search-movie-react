import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = ({ data, searchTerm, loading }) => {
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard
        movieData={data}
        searchTerm={searchTerm}
        loading={loading}
      />
    </div>
  );
};
export default MovieCards;
