import React from 'react'
import Link from 'gatsby-link'

import MeCartoon from '../images/me-cartoon.png';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#ca2c92',
      marginBottom: '1.45rem',
    }}
  >

  <div>

  </div>
    <div className="blog-post-header"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link to="/"><img src={MeCartoon} height="70px" width="70px"/></Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
