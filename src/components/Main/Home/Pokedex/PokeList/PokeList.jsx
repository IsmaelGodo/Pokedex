import Card from './Card';


const PokeList = ({ pokeData }) => {
  return (
    <section className="lista-container">
      <h2 className="lista-title">Pokemons Guardados</h2>
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