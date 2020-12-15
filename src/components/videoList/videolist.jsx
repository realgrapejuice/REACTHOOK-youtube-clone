import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "./videolist.module.css";

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.listContainer}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
