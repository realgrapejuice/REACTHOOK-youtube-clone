import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({ video }) => {
  const snippet = video.snippet;
  return (
    <li className={styles.container}>
      <div className={styles.imgBox}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="thumbnails"
        />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.content}>
          <span className={styles.title}>{snippet.title}</span>
          <span className={styles.author}>{snippet.channelTitle}</span>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
