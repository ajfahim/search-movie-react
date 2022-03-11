import { useEffect, useState } from "react";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../searchBar/SearchBar";
import Title from "../Title/Title";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearchTerm = (e) => {
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
        setData(data.results);
        console.log("DATA: ", data);
      })
      .catch((err) => console.log("Errors: ", err))
      .finally(() => setLoading(false));
  }, []);
  console.log("data: ", data);
  return (
    <>
      <Title />
      <SearchBar searchTerm={searchTerm} updateData={getSearchTerm} />
      <MovieCards movieData={data} searchTerm={searchTerm} loading={loading} />
    </>
  );
}
