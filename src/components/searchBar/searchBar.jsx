import React, { useRef } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch, resetVideoSelect }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const userQuery = inputRef.current.value;
    onSearch(userQuery);
    resetVideoSelect();
    inputRef.current.value = "";
  };

  const handleClick = () => {
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    window.location.reload("true");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleReset}>
        <span className={styles.youtubeIcon}>
          <i className="fab fa-youtube"></i>
        </span>
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchText}
          ref={inputRef}
          type="text"
          placeholder="Search.."
          onKeyPress={handleKeyPress}
          required
        />
        <span className={styles.searchBtn} onClick={handleClick}>
          <i className="fas fa-search"></i>
        </span>
      </div>
    </header>
  );
};

export default SearchBar;
