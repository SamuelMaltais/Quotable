import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar-container'>
        <h1>Quotable</h1>
        <div className='links-container'>
            <Link to="/" className='link non-signin-link'> Quotes</Link>
            <Link to="profile" className='link non-signin-link'> Profile </Link>
            <Link to="login" className='link'> Login </Link>
            <label className='login-signup-separator'>   |   </label>
            <Link to="signup" className='link'> Signup </Link>
        </div>
        
        </div> 
     );
}

export default Navbar;