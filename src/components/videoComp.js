import * as React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles.css';
import VimeoPlayer from "react-player/vimeo";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function VideoComp({ left, link, color }) {
    const playerRef = useRef(null);
    const titleRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const PLAY = <FontAwesomeIcon icon={faPlay} color={color}/>;
    const PAUSE = <FontAwesomeIcon icon={faPause} color={color}/>;

    const headingStyle = {
      color: `${color}`
    };


    function handleButtonClick() {
        const player = playerRef.current.getInternalPlayer();
        if (playing) {
          player.pause();
          titleRef.current.style.display = 'block';
        } else {
          player.play();
          titleRef.current.style.display = 'none';
        }
        setPlaying(!playing);
      }

    return (
        <div className="video-container">
            <div id={left == 0 ? "explain-playa" : "playa"}>
              <ReactPlayer
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  url={link}
                  // controls
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
              />
              <button className="vid-btn" onClick={handleButtonClick}>{playing ? PAUSE : PLAY}</button>
              <h1 ref={titleRef} className="vid-title" style={headingStyle}>VIDEO TITLE</h1>
            </div>
            
        </div>

      );
}