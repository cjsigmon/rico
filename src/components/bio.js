/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {/* {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )} */}
      {author?.firstName && (
        <p>
          Written by <strong>SNAP</strong><br></br>
          Video by <strong>CRACKLE</strong><br></br>
          Photo by <strong>POP</strong><br></br>
          PR <strong>RICE</strong><br></br>
          Graphic <strong>KRISPIES</strong><br></br>
          {` `}
          {/* Don't think we'll need an author description, but 
          will leave commented out here */}
          {/* {author?.description || null} */}
          {` `}
          {/* {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ``}`}>
              You should follow them on Twitter
            </a>
          )} */}
        </p>
      )}
    </div>
  )
}

export default Bio
