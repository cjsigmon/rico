import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Footer = () => {
    return (
      <div className="footer">
           <a className="footer-elem-a" key={"ABOUT"} href={"/2023/04/03/about/"}><h4 className="footer-elem">{"ABOUT"}</h4></a>  
    </div>
    )

  
}


export default Footer;