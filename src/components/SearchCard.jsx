import React from "react";
import "../pokemon.css"

const SearchCard = (pokemonData) => {
  const data= pokemonData.pokemonData;
  const style = data.type + " pokeMapDiv";
//   console.log("prop:", prop.prop);

  return (
    <>
      <div className={style}>
        <h3>{data.name}</h3>
        <img src={data.img} alt="pokemon" />
        <div>
          <small>Type: {data.type}</small>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
