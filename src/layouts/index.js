import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import favicon from '../icons/favicon.png'
import './index.css'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Roush.io"
      meta={[
        { name: 'description', content: 'I like to build things on the web.' },
        { name: 'keywords', content: 'Jacob, Roush, Developer, Web, Iowa, Roushio' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
    ]}
    />
    <Header location={location} data={data} />
    <Content>
      {children()}
    </Content>
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
