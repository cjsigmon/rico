import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import MyContext from "../MyContext";
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Footer = () => {

    const { myBoolean, setMyBoolean } = useContext(MyContext);

    const handleButtonClick = () => {
        setMyBoolean(!myBoolean);
      };



    return (
      <div id="footer">
        <div id="footer-main">
            <a id="footer-logo" className="nav-logo" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="160" height="67.928" viewBox="0 0 160 67.928">
                <g id="Group_5" data-name="Group 5" transform="translate(203.099 229.839)">
                    <text id="Isla" transform="translate(-203.099 -205.839)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">Isla</tspan></text>
                    <text id="de" transform="translate(-145.83 -205.44)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">de</tspan></text>
                    <text id="FUERZA" transform="translate(-203.099 -170.911)" fill="#fff" font-size="37" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">FUERZA</tspan></text>
                </g>
                </svg>
                </a>

                <div id="footer-soc">
                    <a href="https://www.instagram.com/uncglobalstory/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a><FontAwesomeIcon icon={faFacebookF}/></a>
                </div>

                <div id="footer-abt" className="abt-side">
                <a class="nav-elem-a" key={"ABOUT"} href={"/about/"}><h4 class="nav-elem">{"ABOUT"}</h4></a>
                <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
                </div> 
        </div>
           
        <h4 className="nav-elem" id="copyright">© 2023 UNC Global Storytelling</h4>    
        </div>
    )
}


export default Footer;