import * as React from "react";
import '../styles.css';
import logo from '../img/logo/LOGO-color.png';

export default function HeaderImg({ title, tagline, noline, theme }) {
  var str = title;
  var ab = false;
 // "HELLO WORLD"
  
  str = str.toUpperCase();
  if (str == "ABOUT" || str == "SOBRE") {
      ab = true;
      noline = true;
  }
    
    return (
        <div className="bg" id={ab ? "abg" : "rbg"} >
            <div className="box">
                <div id="main-title-contain">
                  {title == "ISLA DE FUERZA" ? <img id="home-title" src={logo} width={"100%"}/> : <h1 className="main-title">{str}</h1>}
                  
                  {noline ? <></> : <hr class="line" id={theme + "-line"}></hr>}
                  {ab ? <></> : <h3 id="main-tagline">{tagline}</h3>}
                </div> 
            </div>
          </div>
    );
}
