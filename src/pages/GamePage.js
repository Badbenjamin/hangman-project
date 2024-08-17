import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"
import TurnsLeft from "../components/TurnsLeft"

function GamePage({ word, handleClick }) {

    const characters = [...word]

    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));
    const [wrongGuesses, setWrongGuesses] = useState([])
    const [winOrLoss, setWinOrLoss] = useState([null])

    useEffect(() => {
        setReveal(matchingCharacters)
    }, [guesses])

    useEffect(() => {
        if (reveal.length === reveal.filter(bool => bool === true).length) {
            setWinOrLoss(true);
        } else if (wrongGuesses.length === 6) {
            setWinOrLoss(false);
        }
    })

    function handleGuess(newGuess) {

        if (winOrLoss === true || winOrLoss === false) {
            return;
        }

        if (!guesses.find(guess => guess === newGuess)) {
            setGuesses([...guesses, newGuess])
        }

        if ((!characters.find(character => character === newGuess) && (!wrongGuesses.find(wrongGuess => wrongGuess === newGuess)))) {
            setWrongGuesses([...wrongGuesses, newGuess])
        }
    }

    let matchingCharacters = characters.map((wordChar) => {
        if (wordChar === guesses.find(guessChar => guessChar === wordChar)) {
            return true
        } else {
            return false
        }
    })

    const guessBlankElement = characters.map((char, i) => {
        return <LetterGuessBlank reveal={reveal[i]} key={char + i} char={char} index={i} />
    })

    return (
        <div>
            <Navbar />
            <h1>GAME</h1>
            {guessBlankElement}
            <TurnsLeft winOrLoss={winOrLoss} wrongGuesses={wrongGuesses} />
            {(winOrLoss[0] === null) ? (<LetterGuessForm handleGuess={handleGuess} />) : <button onClick={handleClick}>Next Word</button>}
        </div>
    )
}

export default GamePage