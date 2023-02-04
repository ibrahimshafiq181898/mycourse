import React from "react";
import ReactPlayer from "react-player";
import "./Sidebar.css";
const VideoPlayer = ({ video_link }) => {
  return (
    <ReactPlayer url={video_link} controls playing width={1020} height={500} />
  );
};

export default VideoPlayer;
