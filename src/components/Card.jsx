import "..//styles/card.css";
export function Card({ sprite, name, types }) {
  return (
    <div className={"card"}>
      {sprite && <img className={"sprite"} src={sprite} alt="pokemon" />}
      <h1>{name}</h1>
      <button onClick={() => console.log(types)}>Log Pokemon Data</button>
    </div>
  );
}
