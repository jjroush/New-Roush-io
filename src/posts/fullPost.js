import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'

import EmailSignup from '../components/Posts/EmailSignup'
import LikeButton from '../components/Posts/LikeButton'
import PostLikeContext from '../components/Posts/PostLikeContext'


const LikeCountSpan = styled.span`
  color: #800000;
`;

const BlogFooterContainer = styled.div`
  display: flex;
`;

export default class PostPage extends Component {
  static contextType = PostLikeContext;
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }


  componentDidMount() {
    const postLikes = this.context;
    const postSlug = this.props.location.pathname.slice(0, -1).substring(7);

    if (postLikes) {
      this.setState({ likes: postLikes[postSlug].Likes });
    } else {
      fetch(`https://us-central1-roushio.cloudfunctions.net/getLikes?article=${this.props.location.pathname.slice(0, -1).substring(7)}`)
        .then(response => response.json())
        .then(data => this.setState({ likes: data.Likes }))
    }
  }

  render() {
    const { data } = this.props
    console.log(this.props);
    return (
      <>
        <Helmet
          title={`${data.mdx.frontmatter.title} | Roush.io`}
          meta={[
            {
              name: 'description',
              content: data.mdx.excerpt,
            },
            {
              name: 'keywords',
              content:
                data.mdx.frontmatter.keywords ||
                'Jacob, Roush, Developer, Web, Iowa, Roushio',
            },
          ]}
        />
        <h1>{data.mdx.frontmatter.title}</h1>
        <span>{data.mdx.frontmatter.date + ' - '}<LikeCountSpan>{`    ${this.state.likes ? this.state.likes : 0} like${this.state.likes !== 1 ? 's' : ''}`}</LikeCountSpan></span>
        <br />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <BlogFooterContainer>
          <LikeButton article={this.props.location.pathname.slice(0, -1).substring(7)} likes={this.state.likes} />
          <EmailSignup />
        </BlogFooterContainer>
      </>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        keywords
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
