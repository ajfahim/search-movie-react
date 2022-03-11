import { useEffect, useState } from "react";
import "./App.css";
import MovieCards from "./components/MovieCards/MovieCards";
import SearchBar from "./components/searchBar/SearchBar";
import Title from "./components/Title/Title";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log("DATA: ", data);
      })
      .catch((err) => console.log("Errors: ", err))
      .finally(() => setLoading(false));
  }, [setMovieData, setLoading]);
  console.log("data: ", movieData);
  return (
    <>
      <Title />
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      <MovieCards
        movieData={movieData}
        searchTerm={searchTerm}
        loading={loading}
      />
    </>
  );
}
