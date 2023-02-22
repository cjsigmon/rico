import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";

const HomePage = () =>  {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allWpPost {
          edges {
            node {
              id
              content
              uri
            }
          }
        }
      }`)

      const { allWpPost } = data;

      return (
        <main>
          <h1>Welcome to my Gatsby site!</h1>
          <p>I'm making this by following the Gatsby Tutorial.</p>
        </main>
      )
    }
    
    // You'll learn about this in the next task, just copy it for now
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default HomePage;