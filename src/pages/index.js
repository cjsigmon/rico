import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import '../styles.css';

const HomePage = () =>  {
  const data = useStaticQuery(graphql`
  {
    allWpPost {
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
          <div class="bg">
            <div class="nav">
              <h1>NAVBAR COMPONENT</h1>
            </div>
            
            <div class="box">
            <h1>TITLE ASSET</h1>
            </div>
            
          </div>

          <p>This is where links to stories could go.</p>
        </main>
      )
    }
    
    // You'll learn about this in the next task, just copy it for now
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default HomePage;