//import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

import Head from './components/Head/Head';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  // const [trainer, setTrainer] = useState('');

  
  // const handleTrainer = (dato) => {
  //   setTrainer(dato);
  // };
  return (
    // dataTrainer={trainer} onDataTrainer={handleTrainer}
    //dataTrainer={trainer} 
    <BrowserRouter>
      <Head />
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;