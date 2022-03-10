import styles from "./SingleMovieCard.module.css";

const SingleMovieCard = ({ searchTerm, movieData }) => {
  if (searchTerm === "") {
    return movieData.map((data) => {
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
  // else {
  //   return movieData
  //     .filter((data) =>
  //       data.title.toLowerCase().match(searchTerm.toLowerCase())
  //     )
  //     .map((data) => {
  //       return (
  //         <div key={data.id} className={styles.cardContainer}>
  //           <img
  //             src={`http://image.tmdb.org/t/p/original${data.poster_path}`}
  //             alt={data.title}
  //           />
  //           <h3 className={styles.title}>{data.title}</h3>
  //           <span className={styles.ratting}>
  //             <span>Ratting:</span>
  //             {data.vote_average}
  //           </span>
  //           <p className={styles.description}>{data.overview}</p>
  //         </div>
  //       );
  //     });
  // }
};
export default SingleMovieCard;
