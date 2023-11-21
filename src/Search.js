import React from "react";

function Search({setSearchTerm}){
 const handlesearch=(e)=>{
    e.preventDefault()
    const searchTerm=e.target.searchTerm.value;
    setSearchTerm(searchTerm)
 };

  return(
    <form onSubmit={handlesearch}>
        <input type="text" name="searchTerm" placeholder="Sea">
        </input>
        <button>Search</button>
    </form>
   
  )
}
export default Search;