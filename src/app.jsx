import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchBar from "./components/search_bar/search_bar";
import VideoPlayer from "./components/video_player/video_player";

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
  }, [youtube]);

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
