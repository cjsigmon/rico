import * as React from "react";
import '../styles.css';

export default function Tagline({ reporter, photo, video1, video2, inter, inter2, adpr, upr }) {
    

    return (
        <div className="byline-contain">
            <div className="byline">
                  {reporter ? <p><b>Reporter</b><br></br>{reporter}</p> : <></>}
                  {photo ? <p><b>Photo</b><br></br>{photo}</p> : <></>}
                  {video1 || video2 ? <p><b>Video</b><br></br>{video1}<br></br>{video2}</p> : <></>}
                  {inter ? <p><b>Interactive</b><br></br>{inter}{inter2 ? <><br></br>{inter2}</> : <></>}</p> : <></>}
                  {adpr ? <p><b>Ad/PR</b><br></br>{adpr}</p> : <></>}
                  {upr ? <p><b>UPR student</b><br></br>{upr}</p> : <></>}
                  <p></p>
            </div>
          </div>
    );
}