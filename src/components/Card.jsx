import "..//styles/card.css";
export function Card({ sprite, name, types }) {
  return (
    <div className={"card"}>
      {sprite && (
        <div className={"sprite-container"}>
          <img className={"sprite"} src={sprite} alt="pokemon" />
        </div>
      )}
      <div className={"card-info-container"}>
        <h1>{name}</h1>
        <button onClick={() => console.log(types)}>Log Pokemon Data</button>
      </div>
    </div>
  );
}
