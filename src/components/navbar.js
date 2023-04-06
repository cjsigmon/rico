import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import '../styles.css';
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Navbar = ({updateParentState, parentState}) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [childState, setChildState] = useState({parentState});

  const navbarStyles = {
    transition: 'top 0.6s'
  }

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);


  const handleButtonClick = () => {
    updateParentState(!parentState);
    setChildState(parentState);
  };

  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {id: {nin: "cG9zdDo1OA=="}}, sort: {date: ASC}) {
    nodes {
      id
      title
      uri
    }
  }
  }
  `)
      const { allWpPost } = data;

    return (
      <div class="navbar" style={{ top: visible ? '0' : '-80px' }}>
            <div class="mar"></div>
  
            <a id="nav-logo" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="160" height="67.928" viewBox="0 0 160 67.928">
              <g id="Group_5" data-name="Group 5" transform="translate(203.099 229.839)">
                <text id="Isla" transform="translate(-203.099 -205.839)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">Isla</tspan></text>
                <text id="de" transform="translate(-145.83 -205.44)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">de</tspan></text>
                <text id="FUERZA" transform="translate(-203.099 -170.911)" fill="#fff" font-size="37" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">FUERZA</tspan></text>
              </g>
            </svg>
            </a>

            <div class="gap"></div>

            <div id="stry-links">
              { allWpPost.nodes.map( post => (
                  <a class="nav-elem-a" key={post.title} href={post.uri}><h4 class="nav-elem">{post.title}</h4></a>
              ))}
            </div>

            <div class="gap"></div>
              
            <div id="abt-side">
              <a class="nav-elem-a" key={"ABOUT"} href={"/2023/04/03/about/"}><h4 class="nav-elem">{"ABOUT"}</h4></a>
              <button onClick={handleButtonClick} id="translation-box"><div id={parentState ? "l-box" : "r-box"}>EN</div><div id={parentState ? "r-box" : "l-box"}>ES</div></button>
            </div>
          
    </div>
    )

  
}



export default Navbar;