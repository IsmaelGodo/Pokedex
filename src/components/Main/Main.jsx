import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pokedex from './Home/Pokedex/Pokedex';
import Lab from './Home/Pokedex/Lab/Lab';
import Detail from './Home/Pokedex/Detail/Detail';

const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Pokedex/>}/>
      <Route path="/lab" element={<Lab/>}/>
      <Route path="/pokemon/:id" element={<Detail/>}/>
    </Routes>
    {/* <Home dataTrainer={trainer} onDataTrainer={handleTrainer}/> */}
  </main>
  )
};

export default Main;