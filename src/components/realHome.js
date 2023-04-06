import * as React from "react";
import { useState, useContext } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderImg from "../components/header";
import Footer from "../components/footer";
import MyContext from "../MyContext";

const HomePage = () =>  {
    const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {id: {ne: "cG9zdDo0NQ=="}}, sort: {date: ASC}) {
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
            <HeaderImg noline={true} />

            <div className="post-grid" id="stry">
              <div className="l-mar"></div>
              <div></div>
              <div className="post-text">
                  <h2 className="main-about">ABOUT THE PROJECT</h2>
                  <p>This site encompasses 5 multimedia documentaries about Puerto Rico--it’s people, problems, 
                    passions It was created by a group of 30 journalism students at UNC-Chapel Hill with help 
                    from dozens of sources, local producers, and professional coaches.
                  </p>
              </div>
              <div className="r-stry-mar"></div>
              <div className="r-mar"></div>
             </div>
  
            { allWpPost.nodes.map((post, index) => (
              <div key={post.title} className="split-bg" id={post.title}>
                <div className={index % 2 == 0 ? "halfground-text" : "halfground"}>
                {index % 2 == 0 ? <a href={ post.uri }><h2>{ post.title }</h2></a> : <></>}
                </div>
               
                <div className={index % 2 == 0 ? "halfground" : "halfground-text"}>
                {index % 2 == 0 ? <></> : <a href={ post.uri }><h2>{ post.title }</h2></a>}
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
  
     