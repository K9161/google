import React from 'react'

export default function header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <link className="navbar-brand" to="#">Header</link>
    <link className="navbar-brand" to="#">Navbar</link>

    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link active" to ="#">Home</link>
        </li>
      </ul>

    </div>

  </div>
</nav>
    </div>
  )
}
