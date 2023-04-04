import * as React from "react";
import '../styles.css';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { useState } from "react";
import Container from '@mui/material/Container';




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

           
            
            
<Container maxWidth="md">
        <div className='playerDiv'>
          <ReactPlayer width={'100%'} height='100%' url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"/>
        </div>
</Container>
        
        </>
        
    );
}