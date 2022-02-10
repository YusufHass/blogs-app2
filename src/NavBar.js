import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
<div className="navbar">

    <h1>The Dojo Blog</h1>
    <div className="links"></div>
    {/* using *href* makes the browser render each time so we need to chenge
    to *Link* to since it avoids so also makes response time faster */}
    {/* <a href='/'>Home</a> */}
    <Link to='/'>Home</Link>
    {/* Link avoids sending each request to the server instead it sees the path and 
    chnages the path through the browser */}
    <Link to='/create'>New Blog</Link>
    <Link to ='/update-name'>Update Name</Link>


</div>
    )
}

export default NavBar