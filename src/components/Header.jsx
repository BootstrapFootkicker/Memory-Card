import {useState, useEffect} from "react";
import "..//styles/App.css";


export function Header({currentScore, highScore}) {
    return (
        <header className={'game-header'}>
            <div className="header-info"><h1>Pokemon Memory Game</h1>
                <span>Get points by clicking on an image but don't click the same image more than once!</span>
            </div>

            <div className="header-score">
                <span>Score:{currentScore}</span>
                <span>High Score:{highScore}</span>
            </div>

        </header>
    );
}