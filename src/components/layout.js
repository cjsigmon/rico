import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navbar from "./navbar"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
    <Navbar />
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}

    
      <main>
        <br></br>
        {children}</main>

      <footer>
        © {new Date().getFullYear()}, UNC MEJO 584
        
      </footer>
    </div>
    </>
  )
}

export default Layout
