import React from "react";
import LoadingImage from "./Loading.gif";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.image}>
      <img src={LoadingImage} alt="Loading..." />
    </div>
  );
}

export default Loading;
