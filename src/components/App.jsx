import "..//styles/App.css";
import { DataHandler } from "./DataHandler.jsx";
import { Grid } from "./Grid.jsx";


//TODO Add way to randomize the pokemon data
//TODO Add difficulty settings
//TODO Add win screen
//TODO add additional card styling like highlighting the card when hovered over
export function App() {
  const pokemonData = DataHandler();

  return (
    <>

      <Grid pokemonData={pokemonData} />
    </>
  );
}
