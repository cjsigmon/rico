import * as React from "react";
import { useState, useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderImg from "../components/header";
import Footer from "../components/footer";
import MyContext from "../MyContext";
import VideoComp from "./videoComp";

const HomePage = () =>  {
  const { myBoolean, setMyBoolean } = useContext(MyContext);
    const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {id: {nin: "cG9zdDo1OA=="}}, sort: {date: DESC}) {
        nodes {
          id
          excerpt
          title
          uri
        }
      }
    }
    `)
        const { allWpPost } = data;  

        

        
  
        return (
            <main>
            <Navbar/>
            <HeaderImg noline={true} title={"ISLA DE FUERZA"}/>

            <div className="post-grid" id="homepage-txt">
              <div className="l-mar"></div>
              <div></div>
              <div id="main-about" className="post-text">
                
                  <h2 className="main-about-title">{myBoolean? "ABOUT" : "SOBRE"}</h2>
                  
                  
                  <p>{myBoolean? "This site encompasses 5 multimedia documentaries about Puerto Rico—its people, problems and passions. It was created by a group of 30 journalism students at UNC-Chapel Hill with help from dozens of sources, local producers and professional coaches." : "Span about"}
                  </p>

              </div>
              <div className="r-stry-mar"></div>
              <div className="r-mar"></div>
             </div>

  
            <VideoComp left={0} color={'white'} link={"https://player.vimeo.com/video/355172283?h=5e5299b581&title=0&byline=0&portrait=0"}/>
            
           {myBoolean ?
           <>
           <div className="home-story-pics" id={"POWER"}>
           <div className={"clickme bl"} id="rcl">
             <Link className="cl-title" to={ "/paso-a-paso" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/paso-a-paso" }><h1 className="home-title" id={"POWER-home-title"}>PASO A PASO</h1></Link>
             <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
           </div>
         </div>
         <div className="home-story-pics" id={"COMMUNITY"}>
           <div className={"clickme bl"} id="lcl">
             <Link className="cl-title" to={ "/community" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"right-title"}>
             <Link to={ "/community" }><h1 className="home-title" id={"COMMUNITY-home-title"}>COMMUNITY</h1></Link>
             <p className={"home-subtitle rsub"} id={"COMMUNITY-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
           </div>
         </div>

         <div className="home-story-pics" id={"GOVERNANCE"}>
           <div className={"clickme bl"} id="rcl">
             <Link className="cl-title" to={ "/governance" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/governance" }><h1 className="home-title" id={"GOVERNANCE-home-title"}>GOVERNANCE</h1></Link>
             <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
           </div>
         </div>

         <div className="home-story-pics" id={"ENVIRONMENT"}>
           <div className={"clickme wh"} id="lcl">
             <Link className="cl-title" to={ "/environment" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"right-title"}>
             <Link to={ "/against-the-current" }><h1 className="home-title" id={"ENVIRONMENT-home-title"}>ENVIRONMENT</h1></Link>
             <p className={"home-subtitle rsub"} id={"ENVIRONMENT-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
           </div>
         </div>

         <div className="home-story-pics" id={"HEALTHCARE"}>
           <div className={"clickme wh"} id="rcl">
             <Link className="cl-title" to={ "/healthcare" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/road-to-recovery" }><h1 className="home-title" id={"HEALTHCARE-home-title"}>HEALTHCARE</h1></Link>
             <p className={"home-subtitle lsub"} id={"HEALTHCARE-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
           </div>
         </div>
           </>
           
         




            : <>
            <div className="home-story-pics" id={"POWER"}>
            <div className={"clickme bl"} id="rcl">
              <Link className="cl-title" to={ "/fuerza" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/fuerza" }><h1 className="home-title" id={"POWER-home-title"}>FUERZA</h1></Link>
              <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
          <div className="home-story-pics" id={"COMMUNITY"}>
            <div className={"clickme bl"} id="lcl">
              <Link className="cl-title" to={ "/comunidad" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"right-title"}>
              <Link to={ "/comunidad" }><h1 className="home-title" id={"COMMUNITY-home-title"}>COMUNIDAD</h1></Link>
              <p className={"home-subtitle rsub"} id={"COMMUNITY-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"GOVERNANCE"}>
            <div className={"clickme bl"} id="rcl">
              <Link className="cl-title" to={ "/gobernancia" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/gobernancia" }><h1 className="home-title" id={"GOVERNANCE-home-title"}>GOBERNANCIA</h1></Link>
              <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"ENVIRONMENT"}>
            <div className={"clickme wh"} id="lcl">
              <Link className="cl-title" to={ "/ambiente" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"right-title"}>
              <Link to={ "/ambiente" }><h1 className="home-title" id={"ENVIRONMENT-home-title"}>AMBIENTE</h1></Link>
              <p className={"home-subtitle rsub"} id={"ENVIRONMENT-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"HEALTHCARE"}>
            <div className={"clickme wh"} id="rcl">
              <Link className="cl-title" to={ "/salud" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/salud" }><h1 className="home-title" id={"HEALTHCARE-home-title"}>SALUD</h1></Link>
              <p className={"home-subtitle lsub"} id={"HEALTHCARE-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
            </>}
              
       


              <Footer/>
          </main>        
        )
      }
      
      export const Head = () => <title>Home Page</title>
      
      // Step 3: Export your component
      export default HomePage;
  
     