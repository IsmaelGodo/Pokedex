import Card from './Card';


const PokeList = ({ pokeData }) => {
  return (
    <section className="lista-container">
      
      <div className="cards-container">
      {pokeData.map((pokemon, index) => (
        <Card
          key={index}
          name={pokemon.name}
          image={pokemon.img}
          height={pokemon.height}
          types={pokemon.types}
          weight={pokemon.weight}
          id={pokemon.id}
        />
      ))}
      </div>
    </section>
  );
};

export default PokeList;