import React from 'react'
import Link from 'gatsby-link'
{/*import Rectangle from '../components/rectangle' */}

const SecondPage = () => (
  <div>
    <h1>Hi, I{`'`}m Himashi</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    {/* <Rectangle/> */}
  </div>
)

export default SecondPage
