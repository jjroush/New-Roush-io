import React, { Component } from 'react'

import Layout from '../components/layout'

import {graphql} from 'gatsby'
import EmailSignup from '../components/Posts/EmailSignup';

export default class PostPage extends Component {
    render() {
        const { data } = this.props;
        return (
            <Layout location={this.props.location}>
            <span>{data.markdownRemark.frontmatter.date}</span>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div  
                    dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html
                    }} 
                 />
                <EmailSignup />
            </Layout>
        )
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {
        slug:{
            eq: $slug
        }
    }) {
        html
        frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
        }
        }
    }
`;