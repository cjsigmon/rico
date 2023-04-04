import * as React from "react";
import '../styles.css';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { useState } from "react";
import Container from '@mui/material/Container';

import ControlIcons from "./ControlIcons";




export default function VideoComp({link}) {

    const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handleFullscreenChange = (isFullscreen) => {
    setFullscreen(isFullscreen);
  };
    
    
    return (
        <>

           
            
            
<div className="video-container">
        <div className='playerDiv'>
          <ReactPlayer id="react-play" width={'100vw'} height='100vh' 
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          playing={false}
          muted={false}
          controls={true}
          />
        </div>
</div>
        
        </>
        
    );
}