import React from "react";
import styles from "../Loading/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loader}>
      <div className={`${styles.duo} ${styles.duo1}`}>
        <div className={`${styles.dot} ${styles.dota}`}></div>
        <div className={`${styles.dot} ${styles.dotb}`}></div>
      </div>
      <div className={`${styles.duo} ${styles.duo2}`}>
        <div className={`${styles.dot} ${styles.dota}`}></div>
        <div className={`${styles.dot} ${styles.dotb}`}></div>
      </div>
    </div>
  );
}

export default Loading;
