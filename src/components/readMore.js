import * as React from "react";
import '../styles.css';
import govImage from '../img/government.jpg'; // import the image file
import powImage from '../img/power.jpg';
import healthImage from '../img/healthcare.jpg';
import envImage from '../img/environment.jpg';
import comImage from '../img/community.jpg';
import { useStaticQuery, graphql } from "gatsby"

export default function ReadMore({ exclude }) {
    const envLink = "/environment";
    const comLink = "/community";
    const govLink = "/governance";
    const powLink = "/paso-a-paso";
    const healthLink = "/healthcare";
    

    return (
        <div className="read-more">
            <div class="circle-container">
                <div class="circle yellow"></div>
                <div class="circle orange"></div>
                <div class="circle red"></div>
                <div class="circle cyan"></div>
                <div class="circle blue"></div>
            </div>

            <h2>MORE FROM ISLA DE FUERZA</h2>
            
            <div className="more-thumbs">
                {exclude === 'Paso a paso' ? <></> :  <a href={powLink}><div className="readmore-hold"><img src={powImage}></img><h4 id="powread">Paso a paso</h4></div></a>}
                {exclude === 'COMMUNITY' ? <></> :  <a href={comLink}><div className="readmore-hold"><img src={comImage}></img><h4 id="comread">COMMUNITY</h4></div></a>}
                {exclude === 'GOVERNANCE' ? <></> :  <a href={govLink}><div className="readmore-hold"><img src={govImage}></img><h4 id="govread">GOVERNANCE</h4></div></a>}
                {exclude === 'ENVIRONMENT' ? <></> :  <a href={envLink}><div className="readmore-hold"><img src={envImage}></img><h4 id="envread">ENVIRONMENT</h4></div></a>}
                {exclude === 'HEALTHCARE' ? <></> :  <a href={healthLink}><div className="readmore-hold"><img src={healthImage}></img><h4 id="hearead">HEALTHCARE</h4></div></a>}
            </div>
        </div>
        
       
    );
}