import { useState, useEffect } from "react";

const Search = ({ handlePokemon }) => {

const [pokeName, setPokeName] = useState('');
const [bounce, setBounce] = useState('')
const [timeid, setTimeid] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (pokeName.trim() !== "") { 
    handlePokemon(pokeName);
    setPokeName('');
    
  }
};


const handleChange = (e) => {
    setBounce(e.target.value);
    setPokeName(e.target.value);
    

};

useEffect(() => {
  
  clearTimeout(timeid);
    const id = setTimeout(() => { handlePokemon(bounce),setPokeName('') }, (3000))
    setTimeid(id);
    

}, [bounce]);
  
return (
  <article className="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" placeholder="Busca un Pokemon" value={pokeName} onChange={handleChange} className="search-input"></input>
      <button type="submit" className="search">Buscar</button>
    </form>
  </article>
)
};

export default Search;
