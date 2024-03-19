import "..//styles/grid.css";
import {Card} from "./Card.jsx";
import {Header} from "./Header.jsx";
import { useState, useEffect } from "react";

export function Grid({pokemonData}) {
    const [cardList, setCardList] = useState([]);
    const [shuffledData, setShuffledData] = useState([]);

    useEffect(() => {
        shuffleCards();
    }, [pokemonData]);

    useEffect(() => {
        const newCardList = shuffledData.map((pokemon, index) => {
            return (
                <Card
                    key={index}
                    sprite={pokemon.sprites.front_default}
                    name={pokemon.name}
                    types={pokemon.types}
                    eventTrigger={shuffleCards}
                />
            );
        });

        setCardList(newCardList);
    }, [shuffledData]);

    function shuffleCards() {
        const shuffled = [...pokemonData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledData(shuffled);
        console.log("shuffled");
    }

    return (
        <>
            <Header/>
            <div className={"grid-wrapper"}>
                <div className={"card-grid"}>
                    {cardList}
                </div>
            </div>
        </>
    );
}