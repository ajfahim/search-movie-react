import "./App.css";
import MovieCards from "./components/MovieCards/MovieCards";
import SearchBar from "./components/searchBar/SearchBar";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Title />
      <SearchBar />
      <MovieCards />
    </>
  );
}

export default App;
