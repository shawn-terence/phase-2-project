import React from "react";

function Search({setSearchTerm}){
 const handlesearch=(e)=>{
    e.preventDefault()
 };

  return(
    <form onSubmit={handlesearch}>
        <input type="text" name="searchTerm" placeholder="Search superhero...">
        </input>
        <button>Search</button>
    </form>
   
  )
}
export default Search;