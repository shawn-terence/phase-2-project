
import React, { useState, useEffect } from 'react';
import Search from './Search';
import { Route, Routes, Link } from 'react-router-dom';
import PowerStats from './PowerStats';
import Biography from './Biography';
import Image from './Image';
import Navbar from './Navbar'; 
import HeroDetails from './HeroDetails'; 
import Favorites from './Favorites';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [superheroData, setSuperheroData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    function fetchData() {
      const apiUrl = `https://www.superheroapi.com/api.php/122102502218121324/search/${searchTerm}`;
      
      fetch(apiUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const filteredResults = data.results.filter(result =>
            result.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSuperheroData(filteredResults);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />

      {superheroData && superheroData.length > 0 ? (
        superheroData.map(result => (
          <div key={result.id}>
            <Image imageUrl={result.image.url} Name={result.name}/>
            <PowerStats powerstats={result.powerstats} />
            <Biography biography={result.biography} work={result.work} placeofBirth={result.placeofBirth}/>
           
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default App;
