import * as React from "react";
import '../styles.css';

export default function VideoComp({link}) {
    
    return (
        <div class="center-content">
        <iframe src="https://player.vimeo.com/video/61654422?h=587052ec41" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}