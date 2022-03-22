import { useEffect, useState } from "react";
import "./App.css";
import MovieCards from "./components/MovieCards/MovieCards.js";
import SearchBar from "./components/searchBar/SearchBar";
import Title from "./components/Title/Title";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=672b7e2942135d80371840ef82c5fc3f"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieData(data.results);
      })
      .catch((err) => console.log("Errors: ", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredMovie(movieData);
    } else {
      setFilteredMovie(
        movieData.filter((data) =>
          data.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, movieData]);

  return (
    <>
      <Title />
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      <MovieCards
        filteredMovie={filteredMovie}
        searchTerm={searchTerm}
        loading={loading}
      />
    </>
  );
}
