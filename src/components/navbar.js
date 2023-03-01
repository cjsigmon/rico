import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';

const hideNav = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
};

const Navbar = () => {

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
        <main>
          
            <div onScroll={hideNav} class="navbar">
              <a href="/"><img src="https://picsum.photos/100/80"></img></a>
              { allWpPost.nodes.map( post => (
                <a key={post.title} href={post.uri}><h4>{post.title}</h4></a>
            ))}
              {/* <a href="#env"><h4>Environment</h4></a>
              <a href="#env"><h4>Community</h4></a>
              <a href="#env"><h4>Governance</h4></a>
              <a href="#env"><h4>Power</h4></a>
              <a href="#env"><h4>Healthcare</h4></a>
              <a href="#env"><h4>ABOUT</h4></a> */}

            </div>
        </main>
    )
}

export default Navbar