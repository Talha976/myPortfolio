import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/style.css'

const Navigation = () => {
  return (
  <div> 
   <nav className="navbar navbar-expand-lg nav">
  <NavLink className="navbar-brand" to="#"> Portfolio </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
  
    <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/about">About Me</NavLink>
    </li> 
    <li className="nav-item">
    <NavLink className="nav-link" to="/skills">Skills</NavLink>
  </li> 
  <li className="nav-item">
  <NavLink className="nav-link" to="/services">Services</NavLink>
</li> 
<li className="nav-item">
<NavLink className="nav-link" to="/contact">Contact</NavLink>
</li> 
    </ul>
    </div>
  
   </nav>
</div>

  )
}

export default Navigation
