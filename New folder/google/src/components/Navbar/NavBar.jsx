import React from 'react'

import './NavBar.css' 
export default function NavBar() {
  return (
    <div className="navbar">
      <p className="logo"><span>w.</span></p>

      <div className="links">
        <p>Explore</p>
        <p>Directory</p>
        <p>Academy</p>
        <p>Jobs</p>
        <p>Market</p>
      </div>

      <input type="search" placeholder="Search by Websites" />

      <div className="actions">
        <p>Log in</p>
        <p>Sign up</p>
        <button className="pro">Be Pro</button>
        <button className="submit">Submit Website</button>
      </div>
    </div>
  )
}

