import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import ContactModal from './ContactModal'
import favicon from '../icons/favicon.png'
import './layout.css'
import Code from './Posts/Code'

const Content = styled.div`
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 960px;
  min-height: ${({ isHome }) => (isHome ? '0' : '70vh')};
`;

const components = {
  pre: props => <div {...props} />,
  code: props => <Code {...props}/>
}


const TemplateWrapper = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        background: file(relativePath: {eq: "bg.jpg"}) {
          childImageSharp {
            # file(relativePath: { eq: "images/myimage.jpg" }) {
            fluid(maxWidth: 1240, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `}
    render={data => (
      <>
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
        <MDXProvider components={components}>
          <Content location={location} isHome={location.pathname === '/'} >
            {children}
          </Content>
        </MDXProvider>
        <Footer />
      </>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper

