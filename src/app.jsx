import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/videoList/videolist";
import SearchBar from "./components/searchBar/searchBar";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);

  const handleSearch = (query) => {
    youtube //
      .loadSearch(query)
      .then((videos) => setVideoList(videos));
  };

  useEffect(() => {
    youtube //
      .loadPopular()
      .then((videos) => setVideoList(videos));
  }, []);

  return (
    <section className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={videoList} />
    </section>
  );
}

export default App;
