import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContactModal from '../ContactModal'


const HeaderWrapper = styled.div`
  background: DarkOrange;
  margin-bottom: ${({isHome}) => (isHome ? '0' : '1.45rem')};
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome ? '100vh' : '40vh')}; 
  text-align: right;
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
    @media (min-width: 649px) {
    display: flex;
    flex-wrap: wrap;
    }
    li {
      margin-left: 30px;
      font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 1.2rem;
      text-align: right;
      list-style-position: inside;
      * {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #ddd;
          cursor: pointer;
        }
      }
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
	
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
    const { data, location, showModal } = this.props;
    return (
    <HeaderWrapper
    isHome={location.pathname === '/'}
    ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
      <HeaderContainer>
        <h2 style={{ margin: 0 }}>
          <Link to="/" style={{color: 'white',textDecoration: 'none',}}>
            Roush.io
          </Link>
        </h2>
          <Nav>
            <ul>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
             <li>              
                <Link to="/posts">POSTS</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <div onClick={this.toggleModal}>CONTACT</div>
              </li>
            </ul>
        </Nav>
      <ContactModal show={this.state.isOpen} onClose={this.toggleModal} />
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
