import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className="navbar">
            <div className="nav-wrapper"><Link to="/">Home</Link></div>
            <div className="nav-wrapper"><Link to="/characters/new">Bookings Form</Link></div>
            <div className="nav-wrapper"><Link to="/characters/new">Gallery</Link></div>
            <div className="nav-wrapper"><Link to="/characters/new">Contact</Link></div>
            <div className="nav-wrapper"><Link to="/login">Login</Link></div>
            <div className="nav-wrapper"><Link to="/login">Logout</Link></div>
        </nav>
    </div>
  )
}

export default NavBar;