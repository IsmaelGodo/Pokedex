import { useState } from "react";

const Search = ({ handlePokemon }) => {

const [pokeName, setPokeName] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (pokeName.trim() !== "") { 
    handlePokemon(pokeName);
    setPokeName('');
    
  }
};

const handleChange = (e) => {
    setPokeName(e.target.value)

};
  
return (
  <article className="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" placeholder="Busca un Pokemon" value={pokeName} onChange={handleChange} className="search-input"></input>
      <button type="submit" className="button">Buscar</button>
    </form>
  </article>
)
};

export default Search;
