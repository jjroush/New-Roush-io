import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import ContactModal from './ContactModal'
import favicon from '../icons/favicon.png'
import './layout.css'

const Content = styled.div`
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 960px;
  min-height: ${({isHome}) => (isHome ? '0' : '50vh' )};
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
    <ContactModal />
    <Content isHome={location.pathname === undefined} >
      {children}
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
