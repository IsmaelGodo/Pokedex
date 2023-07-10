import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = response.data;

        const name = data.name;
        const img = data.sprites.other.home.front_default;
        const height = data.height;
        const types = data.types ? data.types[0].type.name : "";
        const weight = data.weight;
        const pokemonId = data.id;
        const addNewPokemon = { name, img, height, types, weight, id: pokemonId };

        setDetails(addNewPokemon);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData2()
  }, []);

  console.log(details);

  return <section className="detail-container" >
    <div className={`${details.types}-detail`}>
   
    <p><h1>{details.name} #{details.id}</h1></p> <img className="pokelogo" src={`../src/assets/${details.types}.png`}/>
   
    <img className="pokeimg" src={details.img} />
    <p><h3>{details.types}</h3><br/>Height:{details.height}  Weight:{details.weight}</p>
    <p></p>
    
    
      
    </div>
  </section>


};

export default Detail;
