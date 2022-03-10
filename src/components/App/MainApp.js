import React from "react";
import { MovieProvider } from "../../contexts/movieContext";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../searchBar/SearchBar";
import Title from "../Title/Title";

export default function App() {
  return (
    <MovieProvider>
      <Title />
      <SearchBar />
      <MovieCards />
    </MovieProvider>
  );
}
