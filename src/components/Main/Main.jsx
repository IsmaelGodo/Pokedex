import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pokedex from './Home/Pokedex/Pokedex';
import PokeList from './Home/Pokedex/PokeList/PokeList';

const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Pokedex/>}/>
      <Route path="/PoKelist" element={<PokeList/>}/>
    </Routes>
  </main>
  )
};

export default Main;