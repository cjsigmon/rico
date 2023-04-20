import * as React from "react";
import '../styles.css';
import backgroundImage from '../img/adjuntas-lago-garzas.png'; // import the image file

export default function Section({ img, title }) {

    const TITLE = title.toUpperCase();
    // .toUpperCase().replace(/[-_]/g, ' ');
    return (
        <>
            <div class="circle-container">
                <div class="circle yellow"></div>
                <div class="circle orange"></div>
                <div class="circle red"></div>
                <div class="circle cyan"></div>
                <div class="circle blue"></div>
            </div>

            <div className="section-wrapper">
                <div id="section" 
                style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${backgroundImage})`}}>
                    <h2 className="subhead">{TITLE}</h2>
                </div>
            </div>
        </> 
    );
}