import styles from "../searchBar/SearchBar.module.css";

const SearchBar = ({ updateData, searchTerm }) => {
  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          value={searchTerm}
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
