import * as React from "react";
import '../styles.css';
import govImage from '../img/government.jpg'; // import the image file
import powImage from '../img/power.jpg';
import healthImage from '../img/healthcare.jpg';
import envImage from '../img/environment.jpg';
import comImage from '../img/community.jpg';
import { useStaticQuery, graphql } from "gatsby"

export default function ReadMore({ exclude }) {
    const envLink = "/environment/";
    const comLink = "/community/";
    const govLink = "/governance/";
    const powLink = "/power/";
    const healthLink = "/healthcare/";
    

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
                {exclude === 'ENVIRONMENT' ? <></> :  <a href={envLink}><img src={envImage}></img></a>}
                {exclude === 'COMMUNITY' ? <></> :  <a href={comLink}><img src={comImage}></img></a>}
                {exclude === 'GOVERNANCE' ? <></> :  <a href={govLink}><img src={govImage}></img></a>}
                {exclude === 'POWER' ? <></> :  <a href={powLink}><img src={powImage}></img></a>}
                {exclude === 'HEALTHCARE' ? <></> :  <a href={healthLink}><img src={healthImage}></img></a>}
            </div>
        </div>
        
       
    );
}