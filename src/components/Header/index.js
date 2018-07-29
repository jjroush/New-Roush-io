import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'


const HeaderWrapper = styled.div`
  background: DarkOrange;
  margin-bottom: ${({isHome}) => (isHome ? '0' : '1.45rem')};
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome ? '100vh' : '40vh')}; 
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const HeroText = styled.div`
  text-align: center;
  vertical-align: middle;
  padding-top: 30vh;
  h1 {
    font-size: 5em;
  }
  h3 {
    font-size: 2em;
  }
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
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (window.Animation && location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: '40vh' },{ height: '100vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1
        })
      } else if (prevProps.location.pathname === '/') {
        this.wrapper.animate([{ height: '100vh' },{ height: '40vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1
        })
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
    <HeaderWrapper
    isHome={location.pathname === '/'}
    ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
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
      <HeroText>
        <h1>Hey, I'm Jacob</h1>
        <h3>I create things for the web.</h3>
      </HeroText>
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
