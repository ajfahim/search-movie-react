import styles from "./MovieCards.module.css";

const MovieCards = ({ movieData, searchTerm, loading }) => {
  if (loading) {
    return <p>Data is loading...</p>;
  } else if (searchTerm === "") {
    return movieData.map((data) => {
      return (
        <div className={styles.MovieCardsContainer}>
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
        </div>
      );
    });
  } else {
    return movieData
      .filter((data) =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((data) => {
        return (
          <div className={styles.MovieCardsContainer}>
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
          </div>
        );
      });
  }
};
export default MovieCards;
