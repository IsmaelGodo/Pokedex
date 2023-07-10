import React, { useState, useContext } from "react";


const Home = () => {
  
    // const [trainer, setTrainer] = useState('');
  
    //     const handleInputChange = (e) => {
    //   setTrainer(e.target.value);
    // };
    
    
  return (
    <>
      <h1>Bienvenidos</h1>
      <section className="home">
        <div>
        <img className="logo" src="../src/assets/logo.png"/><br/>
        <img className="gif" src="https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/rotom.gif"  />
          
        </div>
      </section><section className="welcome"><form>
        <input
          className="trainer"
          type="text"
          placeholder="Trainer:"
        
        />
        <button className="button" type="submit">Gotta catch em all</button>
      </form></section>
    </>
  );
};

export default Home;