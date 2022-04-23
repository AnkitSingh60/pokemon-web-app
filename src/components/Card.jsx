import React from 'react'
import "../pokemon.css"


const Card = ({image, name, type}) => {
    const style = type + " pokeMapDiv";
  return (
    <div className={style}>
    <h3>{name}</h3>
    <img src={image} alt="pokemon" />
    <div>
      <small>Type: {type}</small>
    </div>
  </div>
    
  )
}

export default Card