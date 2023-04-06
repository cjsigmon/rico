import * as React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles.css';
import VimeoPlayer from "react-player/vimeo";
import ReactPlayer from "react-player";

export default function VideoComp({ link }) {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);


    function handleButtonClick() {
        const player = playerRef.current.getInternalPlayer();
        if (playing) {
          player.pause();
        } else {
          player.play();
        }
        setPlaying(!playing);
      }

    return (
        <div className="video-container">
            <div id="playa">
            <ReactPlayer
                ref={playerRef}
                width="90%"
                height="100%"
                url={link}
                // controls
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
             />
             <button onClick={handleButtonClick}>{playing ? 'Pause' : 'Play'}</button>
            </div>
            
        </div>

      );
}