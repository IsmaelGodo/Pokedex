import React, { useEffect, useState } from "react";
import axios from "axios";

import PokeList from "./PokeList/PokeList";
import Search from "./Search/Search";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemon = async (pokeName) => {
    setPokemonName(pokeName);
  };

useEffect(() => {
  const fetchData = async () => {
    
    if (pokemonName) {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        const data = response.data;
        
        console.log(data)
        const name = data.name;
        const img = data.sprites.other.home.front_default;
        const height = data.height;
        const types = data.types ? data.types[0].type.name : "";
        const weight = data.weight;
        const id = data.id;
        const addNewPokemon = { name, img, height, types, weight, id };
        
        setPokeData([...pokeData, addNewPokemon]);
        console.log("pokeData");

      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  fetchData();
}, [pokemonName]);

return (
  <section>
    <Search handlePokemon={handlePokemon} />
    {isLoading ? <img id="loading" src="../src/assets/spiner.gif"/> : <PokeList pokeData={pokeData} />}
  </section>
);
};

export default Pokedex;