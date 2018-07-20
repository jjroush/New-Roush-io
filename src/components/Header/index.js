import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'


const HeaderWrapper = styled.div`
  background: DarkOrange;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 40vh; 
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 1.5rem;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #ddd;
        }
      }
    }
  }
`;

export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{color: 'white',textDecoration: 'none',}}>
            Roush.io
          </Link>
        </h1>
          <Nav>
            <ul>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              {/* <li>              
                <Link to="/blog">Blog</Link>
              </li> */}
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
        </Nav>
      </HeaderContainer> 
      <Img style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0.2,
      }} sizes={data.background.sizes} />
    </HeaderWrapper>
      
    )
  }
}
