import React from 'react'

function PowerStats() {
  return (
    <div id='PowerStats'>
        <h2>PowerStats</h2>
            <ul>
            <li>Intelligence:{powerstats['intelligence']}</li>
            <li>Strength:{powerstats['strength']}</li>
            <li>Speed:{powerstats['speed']}</li>
            <li>Durability:{powerstats['durability']}</li>
            <li>Power:{powerstats['power']}</li>
            <li>Combat:{powerstats['combat']}</li>
            </ul>
    </div>
  )
}

export default PowerStats