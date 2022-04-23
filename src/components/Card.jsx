import React from 'react'
import "../pokemon.css"


const Card = ({image, name, type}) => {
    const style = type + " pokeMapDiv";
  return (
    <div className={style}>
    <h3>{name}</h3>
    <img src={image} alt="pokemon" />
    <div>
      <h5>Type: {type}</h5>
    </div>
  </div>
    
  )
}

export default Card