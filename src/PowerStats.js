import React from 'react'

function PowerStats() {
  return (
    <div id='PowerStats'>
        <h2>PowerStats</h2>
            <ul>{intelligence}</ul>
            <ul>{strength}</ul>
            <ul>{speed}</ul>
            <ul>{durability}</ul>
            <ul>{power}</ul>
            <ul>{combat}</ul>
    </div>
  )
}

export default PowerStats