import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, onSelect }) => {
  const snippet = video.snippet;
  const handleSelect = () => {
    onSelect(video);
  };
  return (
    <li className={styles.container} onClick={handleSelect}>
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
