import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/videoList/videolist";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=AIzaSyBZ0up_K2359_l5m3V6AbQ4pK7QR8V5m1M",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoList(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section className={styles.container}>
      <SearchBar />
      <VideoList videos={videoList} />
    </section>
  );
}

export default App;
