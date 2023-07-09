import { BrowserRouter } from 'react-router-dom';

import Head from './components/Head/Head';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  return (
    <BrowserRouter>
      <Head />
      <Main/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;