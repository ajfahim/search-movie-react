import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = () => {
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard />
    </div>
  );
};
export default MovieCards;
