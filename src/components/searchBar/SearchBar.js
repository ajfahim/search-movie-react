import styles from "../searchBar/SearchBar.module.css";

const SearchBar = ({ handleChange, searchTerm }) => {
  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          value={searchTerm}
          onChange={handleChange}
          type="text"
          className={styles.input}
          placeholder="Name a movie..."
        />
      </form>
    </div>
  );
};
export default SearchBar;
