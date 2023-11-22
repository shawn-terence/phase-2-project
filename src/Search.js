import React from 'react';


const Search = ({ setSearchTerm, superheroData, addToFavorites }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="searchTerm" placeholder="Search superhero..." />
        <button type="submit">Search</button>
      </form>

    </div>
  );
};

export default Search;