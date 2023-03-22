import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderImg from "../components/header";

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
          <Navbar />
          <HeaderImg title={"Isla de Fuerza"} tagline={"Site Tagline"} />

          <div class="cntr-txt">
            <p>This text is going to explain how this project is related to the 2018 Aftermath</p>
            <p>project.</p>
          </div>

          { allWpPost.nodes.map( post => (
            <div key={post.title} className="split-bg" id={post.title}>
              <div className="halfground"></div>
              <div className="halfground-text">
              <a href={ post.uri }>
              <h2>
                { post.title }
              </h2>
              </a>
              </div>
              
              
            </div>
          ))}

          
          <div className="nothing">
              <h1>FOOTER COMPONENT</h1>
            </div>
        </main>
      )
    }
    
    // You'll learn about this in the next task, just copy it for now
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default HomePage;

   