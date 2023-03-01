import React from "react"
import { useStaticQuery, graphql } from "gatsby"



const Navbar = () => {

    return (
        <main>
            <div class="nav">
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