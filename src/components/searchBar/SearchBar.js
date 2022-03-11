import styles from "../searchBar/SearchBar.module.css";

const SearchBar = ({ getSearchTerm, searchTerm }) => {
  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          value={searchTerm}
          onChange={getSearchTerm}
          type="text"
          className={styles.input}
          placeholder="Name a movie..."
        />
      </form>
    </div>
  );
};
export default SearchBar;
