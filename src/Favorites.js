import React from 'react';
import PowerStats from './PowerStats';
import Biography from './Biography';
import Image from './Image';
import { Link } from 'react-router-dom';
const Favorites = ({ favorites }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <Link to="/">Home</Link> 
            {favorites && favorites.length > 0 ? (
        favorites.map((result) =>
        </div>

    )
}