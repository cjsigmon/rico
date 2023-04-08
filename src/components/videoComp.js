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
    const filterRef = useRef(null);
    const showRef = useRef(null);
    const progRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const PLAY = <FontAwesomeIcon icon={faPlay} color={color}/>;
    const PAUSE = <FontAwesomeIcon icon={faPause} color={color}/>;
    const [isDragging, setIsDragging] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    var duration;
   
    if (playerRef.current) {
      duration = playerRef.current.getDuration();
    }


    const headingStyle = {
      color: `${color}`
    };

    


    function handleButtonClick() {
        const player = playerRef.current.getInternalPlayer();
        if (playing) {
          player.pause();
          // filterRef.current.style.filter = 'brightness(80%)';
          // titleRef.current.style.display = 'block';
        } else {
          player.play();
          
          // filterRef.current.style.filter = '';
          // titleRef.current.style.display = 'none';
        }
        setPlaying(!playing);
      }

      const [progress, setProgress] = useState(0);

  function handleProgress({ played }) {
    const progress = Math.floor(played * 100);
    setProgress(progress);
  }

    return (
        <div className="video-container">
          <h3 ref={showRef}>SHOW ME SOMETHING: {progress}%</h3>
            <div ref={filterRef} id={left == 0 ? "explain-playa" : "playa"}>
              <ReactPlayer
                  id="vid-ht"
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  url={link}
                  onProgress={handleProgress}
                  // controls
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
              />
              <button className="vid-btn" onClick={handleButtonClick}>{playing ? PAUSE : PLAY}</button>
              <div className="vid-bar">
                <div className="prog-bar">
                  <div className="prog-fill-bar" ref={progRef} style={{ width: `${progress}%` }}>
                    <div className="prog-fill-dot"></div>
                  </div>
                </div>
              </div>
              {/* <h1 ref={titleRef} className="vid-title" style={headingStyle}>VIDEO TITLE</h1> */}
            </div>
            
        </div>

      );
}