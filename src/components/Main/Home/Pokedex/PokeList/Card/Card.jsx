import React from "react";

const Card = ({ name, image, height, types, weight, id }) => {
  return <div className="card-container" >
  <div className={`${types}-card`}>
  
   <p><h3>{name} #{id}</h3></p>
    
  
  <img className ="pokeimg"src={image}/>
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