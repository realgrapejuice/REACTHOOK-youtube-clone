import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "./videolist.module.css";

const VideoList = ({ videos, onSelect, display }) => {
  const displayType = display === "selected" ? styles.selected : styles.default;
  return (
    <ul className={displayType}>
      {videos.map((video) => (
        <VideoItem key={video.etag} video={video} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default VideoList;
