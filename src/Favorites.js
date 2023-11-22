import React from 'react';
import PowerStats from './PowerStats';
import {Biography} from './Biography';
import Image from './Image';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2> 
      {favorites && favorites.length > 0 ? (
        favorites.map((result) => (
          <div key={result.id}>
            <PowerStats powerstats={result.powerstats} Name={result.name} />
            <Biography biography={result.biography} work={result.work} />
            <Image imageUrl={result.image.url} />
            <Link to={`/details/${result.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
};

export default Favorites;
