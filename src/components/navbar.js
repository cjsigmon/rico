import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';



const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    // position: 'fixed',
    // height: '60px',
    // width: '100%',
    transition: 'top 0.6s'
  }

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);



  const data = useStaticQuery(graphql`
  {
    allWpPost {
      nodes {
        title
        uri
      }
    }
  }
  `)

      const { allWpPost } = data;

    return (
      <div class="navbar" style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
            <a id="nav-logo" href="/"><img src="https://picsum.photos/80/50"></img></a>
              { allWpPost.nodes.map( post => (
                <a key={post.title} href={post.uri}><h4>{post.title}</h4></a>
            ))}
    </div>
        // <main> 
        //     <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }} class="navbar">
            //   <a id="nav-logo" href="/"><img src="https://picsum.photos/80/50"></img></a>
            //   { allWpPost.nodes.map( post => (
            //     <a key={post.title} href={post.uri}><h4>{post.title}</h4></a>
            // ))}

        //     </div>
        // </main>
    )

  
}



export default Navbar