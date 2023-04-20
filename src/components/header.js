import * as React from "react";
import '../styles.css';
import logo from '../img/logo/LOGO-color.png';

export default function HeaderImg({ title, tagline, noline, theme }) {
  var str = title;
 // "HELLO WORLD"
  
  str = str.toUpperCase();

    
    return (
        <div className="bg">
            <div className="box">
                <div id="main-title-contain">
                  {title == "ISLA DE FUERZA" ? <img id="home-title" src={logo} width={"100%"}/> : <h1 className="main-title">{str}</h1>}
                  
                  {noline ? <></> : <hr class="line" id={theme + "-line"}></hr>}
                  <h3 id="main-tagline">{tagline}</h3>
                </div> 
            </div>
          </div>
    );
}
