import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import PostListing from '../components/Posts/PostListing'
import EmailSignup from '../components/Posts/EmailSignup'

const postPage = (props, { data }) => (
  <StaticQuery
    query={graphql`
      query SiteMeta{
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC
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
        html
        excerpt
        }
      }
    }
  }
`}
    render={data => (
      <>
        <h1>Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
        <EmailSignup />
      </>
    )}
  />
);

export default postPage
