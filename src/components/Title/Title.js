import styles from "../Title/Title.module.css";

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Search Movies</h1>
    </div>
  );
};
export default Title;
