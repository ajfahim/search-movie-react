import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import styles from "../searchBar/SearchBar.module.css";

const SearchBar = () => {
  const { filteredDatas } = useContext(MovieContext);
  const [filteredData, setFilteredData] = filteredDatas;
  const updateData = (e) => {
    setFilteredData(e.target.value);
  };
  console.log(filteredData);
  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          value={filteredData}
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
