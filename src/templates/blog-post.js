import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import HeaderImg from "../components/header"
import Tagline from "../components/tagline"

function BlogPostTemplate ({ data: { previous, next, post } }) {
  const htmlString = post.content;

  return (
    <>
    <Seo title={post.title} description={post.excerpt} />
    <Navbar />
    <HeaderImg title={post.title} tagline={parse(post.excerpt)} />
    <Tagline reporter={"Joe Schmoe"} video={"Nancy Pelosi"} photo={"Obamna"} graphic={"soda"} pr={post.pageQuery} />
    {/* <CustomImage /> */}
    <div className="center-content">
      <div dangerouslySetInnerHTML={replaceImgWithCustomImage(htmlString)} >
        {/* {console.log(post.content)}
      {parse(post.content)} */}
      </div>
    </div>
    </>
    

      // 
      // <h1 >{parse(post.title)}</h1>
     
      /* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */
  )
}



function replaceImgWithCustomImage(htmlString) {
  const customImageRegex = /<figure[^>]+class="wp-block-image size-large"[^>]*>([\s\S]*?)<\/figure>/g;
  const replacedHtmlString = htmlString.replace(customImageRegex, '<img src="https://picsum.photos/id/237/200/300" />'); // Replace <img> tags with <CustomImage> component

  return { __html: replacedHtmlString }; // Set the dangerouslySetInnerHTML attribute with the new HTML string
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`