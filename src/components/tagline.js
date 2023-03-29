import * as React from "react";
import '../styles.css';

export default function Tagline({ reporter, photo, video1, video2, inter, inter2, adpr, upr }) {
    

    return (
        <div className="byline">
            <div className="box">
                <div id="main-title-contain">
                  <p>Reporter {reporter}</p>
                  {photo ? <p>Photo {photo}</p> : <></>}
                  <p>Video {video1}</p>
                  <p>Video {video2}</p>
                  <p>Interactive {inter}</p>
                  {inter2 ? <p>Interactive {inter2}</p> : <></>}
                  {adpr ? <p>Ad/PR {adpr}</p> : <></>}
                  {upr ? <p>UPR student {upr}</p> : <></>}
                </div> 
            </div>
          </div>
    );
}