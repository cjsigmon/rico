import * as React from "react";
import '../styles.css';

export default function VideoComp({link}) {
    
    return (
        <div class="video-container">
        <iframe class="responsive-iframe" src={link} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}