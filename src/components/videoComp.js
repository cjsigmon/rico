import * as React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles.css';
import VimeoPlayer from "react-player/vimeo";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand } from "@fortawesome/free-solid-svg-icons";

export default function VideoComp({ left, link, color }) {
    const playerRef = useRef(null);
    const titleRef = useRef(null);
    const filterRef = useRef(null);
    const showRef = useRef(null);
    const progRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const PLAY = <FontAwesomeIcon icon={faPlay} color={color}/>;
    const PAUSE = <FontAwesomeIcon icon={faPause} color={color}/>;
    const FULLSCREEN = <FontAwesomeIcon icon={faExpand} color={color}/>;
    const vidBtnRef = useRef(null);
    const elementRef = useRef(null);
    const dotRef = useRef(null);
    const barRef = useRef(null);
    const cursRef = useRef(null);
    const playaRef = useRef(null);
    var duration;
    var yPosition;
    const myRef = useRef(null);
    const [isMoving, setIsMoving] = useState(false);

  function handleMouseMove(event) {
    barRef.current.style.opacity = '1';

    // Clear any previous setTimeout function
    clearTimeout(myRef.current);
    // Set a new setTimeout function to change isMoving to false after 1 second of no mouse movement
    if (playing) {
      myRef.current = setTimeout(() => {
        barRef.current.style.opacity = '0';
      }, 3000);
    }
    
  }

    // make bg go black
    useEffect(() => {

      if (myRef.current) {
        yPosition = myRef.current.getBoundingClientRect().y;
      }

     
    }, []);

    function changeBodyBackground() {
      if (window.pageYOffset >= (yPosition - 400) && window.pageYOffset <= (yPosition + 700)) {
        document.body.style.transition = "background-color 0.7s ease-in-out";
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
    }
    window.addEventListener("scroll", changeBodyBackground);
// end make bg go black


   
    if (playerRef.current) {
      duration = playerRef.current.getDuration();
    }

    function handleButtonClick() {
        const player = playerRef.current.getInternalPlayer();
        if (playing) {
          player.pause();
          barRef.current.style.opacity = 1;
          // titleRef.current.style.display = 'block';
        } else {
          player.play();
          barRef.current.style.opacity = 0;
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

        <div className="video-container-anchor" ref={myRef} onMouseMove={handleMouseMove} id={left == 0 ? "explain-anchor" : ""}>
          {/* <h3 ref={showRef}>PROGRESS: {progress}%</h3> */}
          {/* <button onClick={() => handleSkipTo(30)}>Skip to 30 seconds</button> */}
            
            
            <div className="video-container">
              
              <ReactPlayer
                  id="vid-ht"
                  ref={playerRef}
                  style={playing ? {} : { filter: 'blur(5px)',  filter: 'brightness(50%)', position: 'absolute', top:'0', left:'0', width: '100%', height:'100%'}}
                  url={link}
                  onProgress={handleProgress}
                  
                  
                  // controls
                  onPlay={() => setPlaying(true)}
                  onPause={() => (setPlaying(false), handleProgress)}
                  
              />
           
              <div className="all" id={left == 0 ? "explain-all" : ""} ref={cursRef}>
                <div className="vid-bar" id={left == 0 ? "explain-bar" : ""} ref={barRef}>
                  <div className="prog-bar" ref={divRef} onClick={handleTimeClick} >
                    <div className="prog-fill-bar" ref={progRef} style={{ width: `${progress}%` }}>
                      <div className="prog-fill-dot" ref={dotRef}></div>
                    </div>
                  </div>
                  <button id="sml-play-pause" ref={vidBtnRef} onClick={handleButtonClick}>{playing ? PAUSE : PLAY}</button>
                  <button onClick={handleFullScreen}>{FULLSCREEN}</button>
                </div>
                <button className="vid-btn" ref={vidBtnRef} onClick={handleButtonClick}>{playing ? PAUSE : PLAY}</button>
              </div>


              </div>
     
         </div>

      );
}