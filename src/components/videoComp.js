import * as React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles.css';
import VimeoPlayer from "react-player/vimeo";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBaby } from "@fortawesome/free-solid-svg-icons";

export default function VideoComp({ left, link, color }) {
    const playerRef = useRef(null);
    const titleRef = useRef(null);
    const filterRef = useRef(null);
    const showRef = useRef(null);
    const progRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const PLAY = <FontAwesomeIcon icon={faPlay} color={color}/>;
    const PAUSE = <FontAwesomeIcon icon={faPause} color={color}/>;
    const vidBtnRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const elementRef = useRef(null);
    var duration;
   
    if (playerRef.current) {
      duration = playerRef.current.getDuration();
    }


    const headingStyle = {
      color: `${color}`
    };

    


    function handleButtonClick() {
      const iconElement = vidBtnRef.current.querySelector('svg');
          iconElement.icon = faBaby;
        const player = playerRef.current.getInternalPlayer();
        if (playing) {
          player.pause();
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
    if (progress == 99) {
      setProgress(100);
      return;
    }
    setProgress(progress);
  }

  function handleSkipTo(time) {
    playerRef.current.seekTo(time);
  }


  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);

  const divRef = useRef();  
  const handleTimeClick = (event) => {
    const divWidth = divRef.current.offsetWidth;
    const clickPosition = event.clientX - divRef.current.getBoundingClientRect().left;
    const percentage = (clickPosition / divWidth);
    console.log(percentage + " of the div was clicked");
    const timeSeconds = percentage * duration;
    handleSkipTo(timeSeconds);
  };

  let player = null;

  const handleFullScreen = () => {
    const player = playerRef.current.getInternalPlayer();
      if (player && player.requestFullscreen) {
        player.requestFullscreen();
      }
  };

  

    return (
        <div className="video-container">
          <h3 ref={showRef}>SHOW ME SOMETHING: {progress}%</h3>
          <button onClick={() => handleSkipTo(30)}>Skip to 30 seconds</button>
          <button onClick={handleFullScreen}>Full Screen</button>
            <div id={left == 0 ? "explain-playa" : "playa"} >
              <ReactPlayer
                  id="vid-ht"
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  style={playing ? {} : { filter: 'blur(5px)',  filter: 'brightness(50%)'}}
                  url={link}
                  onProgress={handleProgress}
                  
                  // controls
                  onPlay={() => setPlaying(true)}
                  onPause={() => (setPlaying(false), handleProgress)}
              />
              <button className="vid-btn" ref={vidBtnRef} onClick={handleButtonClick}>{playing ? PAUSE : PLAY}</button>
              <div className="vid-bar">
                <div className="prog-bar" ref={divRef} onClick={handleTimeClick} >
                  <div className="prog-fill-bar" ref={progRef} style={{ width: `${progress}%` }}>
                    <div className="prog-fill-dot" ref={dotRef}></div>
                  </div>
                </div>
              </div>
              {/* <h1 ref={titleRef} className="vid-title" style={headingStyle}>VIDEO TITLE</h1> */}
            </div>
            
        </div>

      );
}