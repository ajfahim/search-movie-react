import Loading from "../Loading/Loading";
import styles from "./MovieCards.module.css";

const MovieCards = ({ filteredMovie, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return filteredMovie.map((data) => {
      return (
        <div key={data.id} className={styles.cardContainer}>
          <img
            src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
          />
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.ratting}>
            <span>Ratting:</span>
            {data.vote_average}
          </div>
          <p className={styles.description}>{data.overview}</p>
        </div>
      );
    });
  }
};
export default MovieCards;
