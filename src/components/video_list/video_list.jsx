import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

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
