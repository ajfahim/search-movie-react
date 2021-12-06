import styles from "../searchBar/SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder="Name a movie..."
      />
    </div>
  );
};
export default SearchBar;
