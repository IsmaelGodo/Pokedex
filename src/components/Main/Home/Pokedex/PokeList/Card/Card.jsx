import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, height, types, weight, id }) => {
  return <div className="card-container" >
    <div className={`${types}-card`}>
      <Link to={`/pokemon/${name}`}>{name} #{id}</Link>
      <img className="pokeimg" src={image} />
      <img className="pokelogo" src={`../src/assets/${types}.png`} alt="type-img" />
    </div>
  </div>;

  // <article className="card-basic">
  //   <div className="card">
  //   <h3>{name}</h3>

  //     <img src={image} alt=""/>
  //   </div>
  // </article>


};

export default Card;