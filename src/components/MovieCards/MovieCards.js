import axios from "axios";
import { useEffect, useState } from "react";
import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "8499f091d8mshdd21fe07f3bf67dp15d89cjsnfedaf3b878b6",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
        console.log(movieData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieData]);
  console.log("movieData = ", movieData);
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard movieData={movieData} />
    </div>
  );
};
export default MovieCards;
