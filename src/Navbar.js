
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

            <button><Link to = "/">Home</Link></button>
            <button><Link to = "/favorites">Favourites</Link></button>
            
  
    </nav>
  );
};

export default Navbar;