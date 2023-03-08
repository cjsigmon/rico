import * as React from "react";
import '../styles.css';

export default function HeaderImg({ title, tagline }) {
    
    return (
        <div class="bg">
            <div class="box">
                <div id="main-title-contain">
                  <h1 id="main-title">{title}</h1>
                  <h1>{tagline}</h1>
                </div> 
            </div>
          </div>
    );
}
