import { useEffect, useState } from "react";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../searchBar/SearchBar";
import Title from "../Title/Title";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");

  const updateData = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=672b7e2942135d80371840ef82c5fc3f"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.results);
        console.log("DATA: ", data);
      });
  }, [setData]);
  console.log("data: ", data);
  return (
    <>
      <Title />
      <SearchBar searchTerm={searchTerm} updateData={updateData} />
      <MovieCards movieData={data} searchTerm={searchTerm} />
    </>
  );
}
