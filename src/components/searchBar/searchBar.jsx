import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>YouTube</h1>
      <div className={styles.searchBox}></div>
    </header>
  );
};

export default SearchBar;
