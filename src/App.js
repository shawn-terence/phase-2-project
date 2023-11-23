import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Search from './Search';
import PowerStats from './PowerStats';
import { Biography } from './Biography';
import Image from './Image';
import Navbar from './Navbar'; 
import HeroDetails from './HeroDetails'; 
import Favorites from './Favorites';
import blackAdamData from './blackAdamData';
import './App.css';

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
  const addToFavorites = (hero) => {
    setFavorites((prevFavorites) => [...prevFavorites, hero]);
  };

  return (

    <div>
    <Navbar
    /> 
    <Routes>
      <Route
        path="/"
        element={
          <div>
                  <Search
                    setSearchTerm={setSearchTerm}
                    superheroData={superheroData}
                    addToFavorites={addToFavorites}
                  />
            <p>Welcome to SuperHero DataBase,your one stop website for any information on heros and villains a like</p>
            <div id='Character-container'>
                {superheroData && superheroData.length > 0 ? (
                  superheroData.map((result) => (
                    <div id='Hero-div' key={result.id}>
                      <div> <Image imageUrl={result.image.url} /></div>
                      <div class="card__content">
                        
                      <div id='data-div'>
                        <h3>{result.name}</h3>
                        <PowerStats powerstats={result.powerstats} Name={result.name} />
                        <Biography biography={result.biography} work={result.work} />
                        <button className='btn-2'><Link to={`/details/${result.id}`}>View Details</Link></button>
                        <button className='btn' onClick={() => addToFavorites(result)}>Add to Favorites</button>
                        </div>
                      </div>


                    </div>
                  ))
                ) : (
                  <div>
                    <h1>Are you new here?</h1>
                    <p>If so, here are some instructions:</p>
                    <ol>
                      <li> click on the search bar and input the hero/villain in question</li>
                      <li> press search</li>
                      <li> press view details to see more information about the Character</li>
                      <li>You should see something like this:</li>
                    </ol>
                    <div>
                    <div id="Hero-div" key={blackAdamData.id}>
                      <div>
                        <Image imageUrl={blackAdamData.image.url} /> 
                      </div>
                          <div className="card__content">
                            <div id="data-div">
                              <h3>{blackAdamData.name}</h3>
                              <PowerStats powerstats={blackAdamData.powerstats} Name={blackAdamData.name} /> 
                              <Biography biography={blackAdamData.biography} /> 
                              <button className="btn-2">
                                <Link to={`/details/${blackAdamData.id}`}>View Details</Link>
                              </button>
                              
                            </div>
                          </div>
                        </div>
                                      </div>
                    </div>
                  
                )}
            </div>
          </div>
        }
      />
      <Route
        path="/favorites"
        element={<Favorites favorites={favorites} />}
      />
      <Route
        path="/details/:id"
        element={<HeroDetails />}
      />

    </Routes>
  </div>
  );
}

export default App;