import React, { useState, useEffect, useContext, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import '../styles.css';
import MyContext from "../MyContext";
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);
  const { myBoolean, setMyBoolean } = useContext(MyContext);



  const navbarStyles = {
    transition: 'top 0.7s'
  }
  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setDark(currentScrollPos > window.innerHeight);
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);



  const handleButtonClick = () => {
    setMyBoolean(!myBoolean);
  };

  const navRef = useRef(null);
  const abtRef = useRef(null);
  const strsRef = useRef(null);
  const handleHamClick = () => {
    if(hamMenu) {
      strsRef.current.style.display = 'none';
      abtRef.current.style.display = 'none';
      navRef.current.style.background = 'none';
    } else {
      strsRef.current.style.display = 'block';
      abtRef.current.style.display = 'block';
      navRef.current.style.backgroundColor = 'black';
    }
    setHamMenu(!hamMenu);
  };

  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {id: {nin: "cG9zdDo1OA=="}}, sort: {date: DESC}) {
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
      <>
      {/* <FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed",}}/> */}
      <div ref={navRef} className={`navbar ${dark ? 'dark' : ''} ${visible ? 'visible' : ''}`}>
            
            {/* <div class="mar"></div> */}
            <div className="mob-menu">
              <span onClick={handleHamClick}><FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed",}}/></span>
              
              <Link id="mob-logo" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="160" height="50.928" viewBox="0 0 160 67.928">
              <g id="Group_5" data-name="Group 5" transform="translate(203.099 229.839)">
                <text id="Isla" transform="translate(-203.099 -205.839)" fill="#fff" font-size="10" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">Isla</tspan></text>
                <text id="de" transform="translate(-178.83 -205.44)" fill="#fff" font-size="10" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">de</tspan></text>
                <text id="FUERZA" transform="translate(-205.099 -175.911)" fill="#fff" font-size="37" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">FUERZA</tspan></text>
              </g>
            </svg>
            </Link>
            </div>
            

            <Link className="nav-logo" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="160" height="67.928" viewBox="0 0 160 67.928">
              <g id="Group_5" data-name="Group 5" transform="translate(203.099 229.839)">
                <text id="Isla" transform="translate(-203.099 -205.839)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">Isla</tspan></text>
                <text id="de" transform="translate(-145.83 -205.44)" fill="#fff" font-size="25" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">de</tspan></text>
                <text id="FUERZA" transform="translate(-203.099 -170.911)" fill="#fff" font-size="37" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800"><tspan x="0" y="0">FUERZA</tspan></text>
              </g>
            </svg>
            </Link>

            <div class="gap"></div>

            <div ref={strsRef} id="stry-links">
              { allWpPost.nodes.map( post => (
                  <Link class="nav-elem-a" key={post.title} to={post.uri}><h4 class="nav-elem">{post.title}</h4></Link>
              ))}
            </div>

            <div class="gap"></div>
              
            <div ref={abtRef} className="abt-side">
              <Link class="nav-elem-a" key={"ABOUT"} to={"/about"}><h4 class="nav-elem">{"ABOUT"}</h4></Link>
              <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
            </div>
          
    </div>
    
      </>
      
    )

  
}



export default Navbar;