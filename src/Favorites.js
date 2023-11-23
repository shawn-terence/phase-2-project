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
          <div id='Hero-div' key={result.id}>
          <div> <Image imageUrl={result.image.url} /></div>
          <div class="card__content">
            
          <div id='data-div'>
            <h3>{result.name}</h3>
            <PowerStats powerstats={result.powerstats} Name={result.name} />
            <Biography biography={result.biography} work={result.work} />
            <button className='btn-2'><Link to={`/details/${result.id}`}>View Details</Link></button>

            </div>
          </div>


        </div>
        ))
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
};

export default Favorites;
