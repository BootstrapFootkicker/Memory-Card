import { useState, useEffect } from "react";
import axios from "axios";
import "..//styles/App.css";
import { Card } from "./Card.jsx";
import { DataHandler } from "./DataHandler.jsx";
import { Grid } from "./Grid.jsx";

export function App() {
  const pokemonData = DataHandler();

  return (
    <>

      <Grid pokemonData={pokemonData} />
    </>
  );
}
