import React, { useState, useEffect, useContext, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import '../styles.css';
import MyContext from "../MyContext";
import logo from '../img/logo/LOGO-white-nav.png'
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



function Navbar () {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);
  const { myBoolean, setMyBoolean } = useContext(MyContext);



  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {id: {nin: ["cG9zdDo1OA==", "cG9zdDoyMDQ=", "cG9zdDoyMDA=", "cG9zdDoyMTA=", "cG9zdDoyMTM=", "cG9zdDoyMTY=", "cG9zdDoyMDc="]}}, sort: {date: DESC}) {
        nodes {
          id
          title
          uri
        }
      }
    }
    `)
        const { allWpPost } = data; 
 




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


  // const { allEnPost } = data.engl;

  const sobreId = "cG9zdDoyMDc=";


    return (
      <>
      {/* <FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed",}}/> */}
      <div ref={navRef} className={`navbar ${dark ? 'dark' : ''} ${visible ? 'visible' : ''}`}>
            
            {/* <div class="mar"></div> */}
            <div className="mob-menu">
              <span onClick={handleHamClick}><FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed",}}/></span>
              
              <Link id="mob-logo" to="/"><img id="mob-logo-img" src={logo} />
            </Link>
            </div>
            

            <Link className="nav-logo" to="/"><img id="desk-logo-img" src={logo} />
            </Link>

            <div class="gap"></div>

            <div ref={strsRef} id="stry-links">
              
                  <Link class="nav-elem-a" to={myBoolean ? "/paso-a-paso" : "/paso-a-paso-esp"}><h4 class="nav-elem">{myBoolean? "PASO A PASO" : "Paso a paso"}</h4></Link>
                  <Link class="nav-elem-a" to={myBoolean ? "/community" : "/comunidad"}><h4 class="nav-elem">{myBoolean? "COMMUNITY" : "COMUNIDAD"}</h4></Link>
                  <Link class="nav-elem-a" to={myBoolean ? "/governance" : "/gobernancia"}><h4 class="nav-elem">{myBoolean? "GOVERNANCE" : "GOBERNANCIA"}</h4></Link>
                  <Link class="nav-elem-a" to={myBoolean ? "/against-the-current" : "/ambiente"}><h4 class="nav-elem">{myBoolean? "AGAINST THE CURRENT" : "AMBIENTE"}</h4></Link>
                  <Link class="nav-elem-a" to={myBoolean ? "/road-to-recovery" : "/salud"}><h4 class="nav-elem">{myBoolean? "ROAD TO RECOVERY" : "SALUD"}</h4></Link>
            </div>

            <div class="gap"></div>
              
            <div ref={abtRef} className="abt-side">
              <Link class="nav-elem-a" to={myBoolean ? "/about" : "/sobre"}><h4 class="nav-elem">{myBoolean? "ABOUT" : "SOBRE"}</h4></Link>
              <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
            </div>
          
    </div>
    
      </>
      
    )

  
}



export default Navbar;