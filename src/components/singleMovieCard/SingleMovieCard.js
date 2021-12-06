import axios from "axios";
import { useEffect } from "react";
import styles from "./SingleMovieCard.module.css";

const SingleMovieCard = ({ movieData }) => {
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-details",
      params: { tconst: "tt0944947" },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "8499f091d8mshdd21fe07f3bf67dp15d89cjsnfedaf3b878b6",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.cardContainer}>
      <img src="" alt="" />
      <h3 className={styles.title}>{movieData}</h3>
      <span className={styles.ratting}>ratting</span>
      <p className={styles.description}>description</p>
    </div>
  );
};
export default SingleMovieCard;
