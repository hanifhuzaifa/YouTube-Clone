import React from "react";

import "./Vedio.css";
// import Navbar from "../../Components/Navbar/Navbar";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const {VideoId ,catogoryId} = useParams();
  return (
    <div className="play-container">
      <PlayVideo VideoId={VideoId} />
      <Recommended catogoryId={catogoryId} />
    </div>
  );
};

export default Video;
