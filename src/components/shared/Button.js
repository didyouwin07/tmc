import React from "react";
import styles from "./styles/buttonStyles.module.css";

export default function Button(props) {
  const { width, title, height } = props;
  return (
    <div
      style={{ width: width, height: height }}
      className={styles.wrapper}
    >
      {title}
    </div>
  );
}
