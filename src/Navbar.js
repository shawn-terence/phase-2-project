
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      

            <button className='nav-btn'><Link to = "/">Home</Link></button>
            <button className='nav-btn'><Link to = "/favorites">Favourites</Link></button>
            
  
    </nav>
  );
};

export default Navbar;