import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/videoList/videolist";
import SearchBar from "./components/searchBar/searchBar";
import VideoPlayer from "./components/videoPlayer/videoPlayer";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const resetVideoSelect = () => {
    setSelectedVideo(null);
  };

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
      <SearchBar onSearch={handleSearch} resetVideoSelect={resetVideoSelect} />
      <main className={styles.content}>
        {selectedVideo && <VideoPlayer selectedVideo={selectedVideo} />}
        <VideoList
          videos={videoList}
          onSelect={handleVideoSelect}
          display={selectedVideo ? "selected" : "default"}
        />
      </main>
    </section>
  );
}

export default App;
