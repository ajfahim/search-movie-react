import { useState } from "react";
import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard />
    </div>
  );
};
export default MovieCards;
