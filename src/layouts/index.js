import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Roush.io"
      meta={[
        { name: 'description', content: 'I like to build things on the web.' },
        { name: 'keywords', content: 'Jacob, Roush, Developer, Web' },
      ]}
    />
    <Header location={location} data={data} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        //minHeight: '50vh',
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "../images/bg.jpg/"}) {
      sizes(maxWidth: 1240, grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
