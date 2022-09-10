import video from "./video.mp4";
import React from "react";
const Video = () => (
  <>
    <video height="900px" autoPlay="autoPlay">
      <source src={video} type="video/mp4" />
    </video>
  </>
);

export default Video;
