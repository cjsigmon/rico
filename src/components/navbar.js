import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';

function hideNav() {
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
}

const Navbar = () => {

    return (
        <main>
            <div onScroll="hideNav()" class="navbar">
              <a href="/"><img src="https://picsum.photos/100/70"></img></a>
              <h4>Environment</h4>
              <h4>Community</h4>
              <h4>Governance</h4>
              <h4>Power</h4>
              <h4>Healthcare</h4>
              <h4>ABOUT</h4>

            </div>
        </main>
    )
}

export default Navbar