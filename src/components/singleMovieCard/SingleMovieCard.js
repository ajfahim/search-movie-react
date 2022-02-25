import { useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/movieContext";
import styles from "./SingleMovieCard.module.css";

const SingleMovieCard = () => {
  const { data, searchTarms } = useContext(MovieContext);
  const [datas, setDatas] = data;
  const [searchTarm] = searchTarms;

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=672b7e2942135d80371840ef82c5fc3f"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDatas(data.results);
      });
  }, [setDatas]);

  if (searchTarm === "") {
    return datas.map((data) => {
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
    return datas
      .filter((data) =>
        data.title.toLowerCase().match(searchTarm.toLowerCase())
      )
      .map((data) => {
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
  }
};
export default SingleMovieCard;
