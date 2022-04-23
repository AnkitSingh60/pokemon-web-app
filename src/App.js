import 'antd/dist/antd.css';
import './App.css';
import "./pokemon.css"
import { Input, message } from 'antd';
import { useEffect, useState } from 'react';
import SearchCard from "./components/SearchCard"
import Card from './components/Card';
import ModalView from './ModalView';
const { Search } = Input;

function App() {
  const [getPokemon, setPokemon] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonData, setPokemonData] = useState({})
  const [visible, setVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState(null);
  const fetchTenPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
    const pokeData = await res.json();
    const pokeNames = pokeData.results

    function createPokemonObj(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const newData = await res.json();
        setPokemon(list => [...list, newData])
      })
    }
    createPokemonObj(pokeNames)
  }
  useEffect(() => {
    fetchTenPokemon()
  }, [])
  const searchPokemonName = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);     //setting pokemon name to get pokemon data
      console.log('res:', res.status)
      const data = await res.json();
      setPokemonData({
        name: pokemonName,
        species: data.species.name,
        img: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name
      })
      setVisible(true)
      setPokemonName("")
    } catch (e) {
      message.error("Pokemon not found");
    }

  }

  console.log(isModalVisible)
  console.log(id)
  return (
    <>
      <div className="App">
        <h1>Search Pokemon</h1>
        <Search placeholder="Search pokemon"
          style={{ width: "20%" }} onChange={(event) => {
            setPokemonName(event.target.value)
            setVisible(false);
          }} size="medium" allowClear="true"
          onSearch={searchPokemonName}
          value={pokemonName}
          enterButton />
      </div>
      {!visible && <div>

        <div className="mainDiv">
          <div className="pokeDiv">
            {getPokemon.map((pokemon, index) =>
              <div onClick={() => {
                console.log("clicked")
                setIsModalVisible(true);
                setId(index)
              }}>
                <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}

                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                />
              </div>
            )}
          </div>
        </div>
      </div>}
      {visible && <SearchCard pokemonData={pokemonData} />}
      {isModalVisible && <ModalView getPokemon={getPokemon} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} id={id} />}
    </>
  );
}

export default App;
