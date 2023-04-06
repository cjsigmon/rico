import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderImg from "../components/header";
import Footer from "../components/footer";

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


      const [parentState, setParentState] = useState('');

  const updateParentState = (newValue) => {
    setParentState(newValue);
  };


      return (
        <main>
          <Navbar updateParentState={updateParentState} parentState={parentState}/>
          <HeaderImg title={"Isla de Fuerza"} tagline={"Site Tagline"} />

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

{/* <CustomImage/> */}
            <Footer updateParentState={updateParentState} parentState={parentState}/>
        </main>
      )
    }
    
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default HomePage;

   