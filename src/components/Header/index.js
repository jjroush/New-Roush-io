import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{color: 'white',textDecoration: 'none',}}>
          Roush.io
        </Link>
        <Link className="header-link" to="/video">
        <h1>Video</h1>
        </Link>
        <Link to="/web">
        <h1>Web</h1>
        </Link>
        <Link to="/blog">
        <h1>Blog</h1>
        </Link>
        <Link to="/about">
        <h1>About</h1>
        </Link>
      
      </h1>
      
    </div>
    
  </div>
)

export default Header
