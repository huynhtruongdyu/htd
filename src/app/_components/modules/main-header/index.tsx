import React from "react";
import styles from "./styles.module.css";
const MainHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <img src="" alt="" />
        <h3>htd</h3>
      </div>
      <div className={styles.searchBar}>{/* TODO: add search bar */}</div>
      <div className={styles.actions}>{/* TODO: add actions */}</div>
    </div>
  );
};

export default MainHeader;
