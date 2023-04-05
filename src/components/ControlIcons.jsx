import React from 'react';
import '../storyPage.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { FastRewind } from '@mui/icons-material';
import { FastForwardSharp } from '@mui/icons-material';
import { PlayArrowSharp } from '@mui/icons-material';

const ControlIcons = () => {
    return (
          <div className="controls__div">





        <IconButton className='controls__icons' aria-label='reqind'>
             <PlayArrowSharp fontSize='small' style={{color:'white'}}/>
        </IconButton>

        
      </div>
    )
}

export default ControlIcons;