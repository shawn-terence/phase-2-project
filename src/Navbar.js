import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/favorites">Favourites</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;