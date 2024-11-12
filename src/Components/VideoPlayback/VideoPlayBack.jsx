import Video from "../../assets/videoplayback.mp4";
import { useRef } from "react";
import "./VideoPlayback.css";

const VideoPlayBack = ({ playState, setPlayState }) => {
  const player = useRef(null);
  function onClose() {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }
  return (
    <div
      className={`video-play ${playState ? "" : "hide"}`}
      ref={player}
      onClick={onClose}
    >
      <video src={Video} autoPlay muted controls />
    </div>
  );
};

export default VideoPlayBack;
