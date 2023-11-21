import React from "react";
import { useState,useEffect } from "react";
import { useParams,useHistory } from "react-router-dom"

export default function Biography( ) {
    const { id }=useParams()
    
    const [getBiography,setBiography]=useState([])
 
    const [getConnection,setConnection]=useState([])
    const history=useHistory()
    const goBack=() =>{
        history.push('/')
    }
    useEffect(() =>{
        (
          async() =>{
               try {
                
                 const response=await fetch(`https://www.superheroapi.com/api.php/122102502218121324/search/${id}.json`)
                 const data=await response.json()
                  console.log(data.biography)
               
                 setBiography(data.biography)
                 setConnection(data.connections)
                 }
               catch(e)
               {
                  console.log(e)
                  
               }
          })  ()
   

},[id])

return (
        
    <div className="Biography">

      <h3>FULL NAME: <br/>{getBiography.fullName}</h3>
      <br/>
      <h3>ALTER EGOS: <br/>{getBiography.alterEgos}</h3>
      <br/>
      <h3>PLACE OF BIRTH:  <br/>{getBiography.placeOfBirth}</h3>
      <br/>
      <h3>FIRST APPEARANCE: <br/> {getBiography.firstAppearance}</h3>
      <br/>
      <h3>ALIGNMENT:  <br/>{getBiography.alignment}</h3>
      <br/>
     
      <button className="button_style" onClick={() =>goBack()}>Go Back</button>
    
     


  </div>
 
  
 
)
}