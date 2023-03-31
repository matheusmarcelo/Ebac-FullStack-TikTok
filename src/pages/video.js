import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://static.videezy.com/system/resources/previews/000/033/826/original/pattaya-aerial-view30.mp4"
      ></video>
      {/* Side bar*/}
      {/* Footer */}
      <VideoFooter />
    </div>
  );
}

export default Video;
