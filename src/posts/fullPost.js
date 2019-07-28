import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import EmailSignup from '../components/Posts/EmailSignup'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <>
        <Helmet
          title={`${data.markdownRemark.frontmatter.title} | Roush.io`}
          meta={[
            {
              name: 'description',
              content: data.markdownRemark.excerpt,
            },
            {
              name: 'keywords',
              content:
                data.markdownRemark.frontmatter.keywords ||
                'Jacob, Roush, Developer, Web, Iowa, Roushio',
            },
          ]}
        />
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <EmailSignup />
      </>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        keywords
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
