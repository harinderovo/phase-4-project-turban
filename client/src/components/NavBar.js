import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function NavBar() {

    const {handleLogout, user} = useContext(UserContext)
    console.log(user)
  return (
    <div>
        <nav className="navbar">
            {/* <div className="nav-wrapper"><Link to="/login">Login</Link></div> */}
            {/* <div className="nav-wrapper"><Link to="/logout">Logout</Link></div> */}
            {/* <div className="nav-wrapper"><Link to="/signup">Signup</Link></div> */}
            { !user ? ( 
              <div className="nav-wrapper"><Link to="/login">Login</Link></div>
              ) : (
                <>
                <div className="nav-wrapper"><Link to="/">Home</Link></div>
                <div className="nav-wrapper"><Link to="/bookings/new">Bookings Form</Link></div>
                <div className="nav-wrapper"><Link to="/gallery">Gallery</Link></div>
                <div className="nav-wrapper"><Link to="/contact">Contact</Link></div>
                <button onClick={handleLogout}>Logout</button>
            </>)}
        </nav>
    </div>
  )
}

export default NavBar;