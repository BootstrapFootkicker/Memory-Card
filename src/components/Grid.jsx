import "..//styles/grid.css";
export function Grid({ pokemonData }) {
  return (
    <div className={"grid-wrapper"}>
      <div className={"card-grid"}>
        {pokemonData.map((pokemon, index) => (
          <div className={"card"} key={index}>
            <div className={"sprite-container"}>
              <img
                className={"sprite"}
                src={pokemon.sprites.front_default}
                alt="pokemon"
              />
              <div className={"card-info-container"}>
                <h1>{pokemon.name}</h1>
                <button onClick={() => console.log(pokemon.types)}>
                  Log Pokemon Data
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
