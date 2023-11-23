import React from 'react';


const Search = ({ setSearchTerm, superheroData, addToFavorites }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div id='search-div'>
      <form id="form-search" onSubmit={handleSearch}>
        <input id='Input' type="text" name="searchTerm" placeholder="Search superhero..." />
        <button id='Submit-btn' type="submit">Search</button>
      </form>

    </div>
  );
};

export default Search;
