import React, { useEffect, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PostListing from '../components/Posts/PostListing'
import EmailSignup from '../components/Posts/EmailSignup'
import PostLikeContext from '../components/Posts/PostLikeContext.js'

function PostPage(props, { data }) {
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetch('https://us-central1-roushio.cloudfunctions.net/getLikes')
      .then(response => response.json())
      .then(data => setLikes(data))
  }, []);
  return (
    <StaticQuery
      query={graphql`
      query SiteMeta{
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
        body
        excerpt
        }
      }
    }
  }
`}
      render={data => (
        <PostLikeContext.Provider value={likes}>
          <h1>Posts</h1>
          {data.allMdx.edges.map(({ node }) => (
            <PostListing key={node.id} post={node} />
          ))}
          <EmailSignup />
        </ PostLikeContext.Provider>
      )}
    />
  )
};

export default PostPage
