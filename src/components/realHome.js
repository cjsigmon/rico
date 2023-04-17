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
                  <h2 className="main-about-title">ABOUT THE PROJECT</h2>
                  <p>This site encompasses 5 multimedia documentaries about Puerto Rico—its people, problems and 
                    passions. It was created by a group of 30 journalism students at UNC-Chapel Hill with help 
                    from dozens of sources, local producers and professional coaches.
                  </p>
              </div>
              <div className="r-stry-mar"></div>
              <div className="r-mar"></div>
             </div>
  
            <VideoComp left={0} color={'white'} link={"https://player.vimeo.com/video/355172283?h=5e5299b581&title=0&byline=0&portrait=0"}/>
            
            { allWpPost.nodes.map((post, index) => (
              <div key={post.title} className="home-story-pics" id={post.title}>
                <div className={index < 3 ? "clickme bl" : "clickme wh"} id={index % 2 == 0 ? "rcl" : "lcl"}>
                  <Link className="cl-title" to={ post.uri }>
                    <h5>READ THIS STORY</h5>
                  </Link>
                </div>
                <div className={index % 2 == 0 ? "left-title" : "right-title"}>
                  <Link to={ post.uri }><h1 className="home-title" id={post.title + "-home-title"}>{ post.title }</h1></Link>
                  <p className={index % 2 == 0 ? "home-subtitle lsub" : "home-subtitle rsub"} id={post.title + "-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
                </div>
              </div>
            ))}
              <Footer/>
          </main>        
        )
      }
      
      export const Head = () => <title>Home Page</title>
      
      // Step 3: Export your component
      export default HomePage;
  
     