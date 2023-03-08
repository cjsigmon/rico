import * as React from "react";
import '../styles.css';

export default function Tagline({ reporter, video, video2, photo, grpahic, pr }) {
    
    return (
        <div class="byline">
            <div class="box">
                <div id="main-title-contain">
                  <p>Reporter {reporter}</p>
                  <p>Video {video}</p>
                  <p>Photo {photo}</p>
                  <p>Graphic {grpahic}</p>
                  <p>PR {pr}</p>
                </div> 
            </div>
          </div>
    );
}