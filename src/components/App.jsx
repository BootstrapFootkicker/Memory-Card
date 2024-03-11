import { useState, useEffect } from "react";
import axios from "axios";
import "..//styles/App.css";
import { Card } from "./Card.jsx";
import { DataHandler } from "./DataHandler.jsx";
export function App() {
  const pokemonData = DataHandler();

  return (
    <>
      <h1>Hello, Vite!</h1>
      <button onClick={() => console.log(pokemonData)}>Log Pokemon Data</button>
      {pokemonData[0] && (
        <Card
          sprite={pokemonData[0].sprites.front_default}
          name={pokemonData[0].name}
          types={pokemonData[0].types}
        />
      )}{" "}
    </>
  );
}
