import * as React from "react";
import '../styles.css';

export default function HeaderImg({ title, tagline }) {
    
    return (
        <div className="bg">
            <div className="box">
                <div id="main-title-contain">
                  <h1 id="main-title">{title}</h1>
                  <hr class="line" id={title + "-line"}></hr>
                  <h3 id="main-tagline">{tagline}</h3>
                </div> 
            </div>
          </div>
    );
}
