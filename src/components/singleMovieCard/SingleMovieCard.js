import { useEffect, useState } from "react";
import styles from "./SingleMovieCard.module.css";

const SingleMovieCard = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=672b7e2942135d80371840ef82c5fc3f"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(true);
        console.log(data.results);
        setDatas(data.results);
        setIsLoading(false);
      });
  }, []);
  console.log("from outside: ", datas);
  if (isLoading) return <h1>Loading...</h1>;
  else {
    return datas.map((data) => {
      return (
        <div key={data.id} className={styles.cardContainer}>
          <img
            src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
          />
          <h3 className={styles.title}>{data.title}</h3>
          <span className={styles.ratting}>{data.vote_average}</span>
          <p className={styles.description}>{data.overview}</p>
        </div>
      );
    });
  }
};
export default SingleMovieCard;
