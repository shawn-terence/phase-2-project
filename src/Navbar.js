import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>Favourites</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;