import React from "react";
import styles from "./videoPlayer.module.css";

const VideoPlayer = ({ selectedVideo }) => {
  const snippet = selectedVideo.snippet;
  const date = snippet.publishedAt.split("T")[0];
  const id = !selectedVideo.id.length
    ? selectedVideo.id.videoId
    : selectedVideo.id;
  console.log(id);
  return (
    <section className={styles.container}>
      <div className={styles.player}>
        <iframe
          id="player"
          type="text/html"
          width="80%"
          height="400"
          src={`http://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.info}>
        <dl>
          <div className={styles.channel}>
            <dt>Channel</dt>
            <dd>{snippet.channelTitle}</dd>
          </div>
          <div className={styles.publishedAt}>
            <dt>Published Date</dt>
            <dd>{date}</dd>
          </div>
        </dl>
        <h1 className={styles.contentTitle}>{snippet.title}</h1>
      </div>
    </section>
  );
};

export default VideoPlayer;
