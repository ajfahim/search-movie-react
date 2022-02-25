import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import styles from "../searchBar/SearchBar.module.css";

const SearchBar = () => {
  const { searchTarms } = useContext(MovieContext);
  const [searchTarm, setSearchTarm] = searchTarms;
  const updateData = (e) => {
    setSearchTarm(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          value={searchTarm}
          onChange={updateData}
          type="text"
          className={styles.input}
          placeholder="Name a movie..."
        />
      </form>
    </div>
  );
};
export default SearchBar;
