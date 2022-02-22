import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";
const MovieCards = () => {
  const { filteredDatas, titles } = useContext(MovieContext);
  const [filteredData] = filteredDatas;
  const [title] = titles;
  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  console.log("filterdItem: ", filterItems(title, "an"));

  if (filteredData === "") {
    return (
      <div className={styles.MovieCardsContainer}>
        <SingleMovieCard />
      </div>
    );
  } else if (filterItems(title, filteredData)) {
    return filterItems(title, filteredData).map((data) => {
      return (
        <div key={data.id} className={styles.cardContainer}>
          <img
            src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
          />
          <h3 className={styles.title}>{data.title}</h3>
          <span className={styles.ratting}>
            <span>Ratting:</span>
            {data.vote_average}
          </span>
          <p className={styles.description}>{data.overview}</p>
        </div>
      );
    });
  } else {
    return <h1>Did not matched</h1>;
  }
};
export default MovieCards;
