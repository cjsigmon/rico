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
          <HeaderImg title={"Isla de Fuerza"} tagline={"Never Stop Not Stopping"} />

          { allWpPost.nodes.map( post => (
            <div key={post.title} class="bg" id={post.title}>
              <a href={ post.uri }>
              <h2>
                { post.title }
              </h2>
              </a>
              
            </div>
          ))}

          
          <div class="nothing">
              <h1>FOOTER COMPONENT</h1>
            </div>
        </main>
      )
    }
    
    // You'll learn about this in the next task, just copy it for now
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default HomePage;

   