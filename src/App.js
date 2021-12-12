import { MovieProvider } from "../src/contexts/movieContext";
import "./App.css";
import MovieCards from "./components/MovieCards/MovieCards";
import SearchBar from "./components/searchBar/SearchBar";
import Title from "./components/Title/Title";

function App() {
  return (
    <MovieProvider>
      <Title />
      <SearchBar />
      <MovieCards />
    </MovieProvider>
  );
}

export default App;
