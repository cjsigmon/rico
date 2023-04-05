import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import HeaderImg from "../components/header"
import Tagline from "../components/tagline"
import CustomImage from "../components/customImage";
import Parser from "html-react-parser";
import VideoComp from "../components/videoComp"
import Footer from "../components/footer"
import Section from "../components/section"


function changeBodyBackground() {
  if (window.pageYOffset >= 3600 && window.pageYOffset <= 4400) {
    document.body.style.transition = "background-color 1s ease-in-out";
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

window.addEventListener("scroll", changeBodyBackground);

function BlogPostTemplate ({ data: { previous, next, post } }) {
  const htmlString = post.content;

  const options = {
    replace: (node) => {
      if (node.attribs && node.attribs.class === "replace-photo") {
        return  <CustomImage />;
      }
      else if (node.attribs && node.attribs.class === "replace-video") {
        switch(node.attribs.id) {
          case "health-vid":
            return <VideoComp link={"https://player.vimeo.com/video/94282169?h=1e43d197da&title=0&byline=0&portrait=0"} />;
            break;
          case "power-vid":
            return <VideoComp link={"https://player.vimeo.com/video/291295858?h=fee30cc906"} />;
            break;
        }
      }
      else if (node.attribs && node.attribs.class === "replace-section") {
        return <Section title={node.attribs.id}></Section>;
      }
    },
  };
  

  const componentTree = Parser(htmlString, options);

  var storyTeam = {};
  switch(post.title) {
    case 'ENVIRONMENT':
      storyTeam.reporter = 'Thomas Moody-Jones';
      storyTeam.photo = 'Dylan Thiessen';
      storyTeam.video1 = 'Ann Licharew';
      storyTeam.video2 = 'Taylor Holbrooks';
      storyTeam.inter = 'Gina Flow';
      storyTeam.adpr = 'Florencia Loncán';
      storyTeam.upr = 'Karina Torres';
      break;
    case 'COMMUNITY':
      storyTeam.reporter = 'Liv Reilly';
      storyTeam.photo = 'Anna Connors';
      storyTeam.video1 = 'Cynthia Liu';
      storyTeam.video2 = 'Fallon Maher';
      storyTeam.inter = 'Nina Scott';
      storyTeam.upr = 'Carlos Ramírez Brito';
      break;
    case 'GOVERNANCE':
      storyTeam.reporter = 'Emily Gajda';
      storyTeam.photo = 'Samantha Lewis';
      storyTeam.video1 = 'Allyson Rabon';
      storyTeam.video2 = 'Quincy Marks';
      storyTeam.inter = 'Giuli Hoffmann';
      storyTeam.upr = 'Amanda Jiménez Berríos';
      break;
    case 'POWER':
      storyTeam.reporter = 'Preston Fore';
      storyTeam.video1 = 'Gerard Millman';
      storyTeam.video2 = 'Lauren Cmiel';
      storyTeam.inter = 'Clara Mello';
      storyTeam.inter2 = 'Jacob Turner';
      storyTeam.upr = 'Yondy Agosto García';
      break;
    case 'HEALTHCARE':
      storyTeam.reporter = 'Lucas Thomae';
      storyTeam.photo = 'Heather Diehl';
      storyTeam.video1 = 'Angelina Katsanis';
      storyTeam.video2 = 'Jennifer Tran';
      storyTeam.inter = 'Caleb Sigmon';
      storyTeam.adpr = 'Bella Cankurtaran';
      break;
  }

  return (
    <>
    <Seo title={post.title} description={post.excerpt} />
    <Navbar />
    <HeaderImg title={post.title} tagline={parse(post.excerpt)} />
   
    {/* <CustomImage /> */}
    {/* <div className="center-content">
      {componentTree}
    </div> */}
    <div className="post-grid" id="stry">
      <div className="l-mar"></div>
    <Tagline reporter={storyTeam.reporter} photo={storyTeam.photo} video1={storyTeam.video1} video2={storyTeam.video2} inter={storyTeam.inter} inter2={storyTeam.inter2} adpr={storyTeam.adpr} upr={storyTeam.upr} />
      <div className="post-text">
      {componentTree}
      </div>
      <div className="r-stry-mar"></div>
      <div className="r-mar"></div>
    </div>
    <Footer />
    </>
    

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