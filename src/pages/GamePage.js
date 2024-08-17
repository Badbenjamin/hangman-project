import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"
import TurnsLeft from "../components/TurnsLeft"

function GamePage({ word }) {

    const characters = [...word]

    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));
    const [wrongGuesses, setWrongGUesses] = useState([])

    useEffect(() => {
        setReveal(matchingCharacters)
    }, [guesses])

    function handleGuess(newGuess) {
        setGuesses([...guesses, newGuess])
    }

    let matchingCharacters = characters.map((wordChar) => {
        if (wordChar === guesses.find(guessChar => guessChar === wordChar)) {
            return true
        } else {
            return false
        }
    })

    // let wrongGuess =
    console.log("g", guesses)
    console.log("char", characters)

    const guessBlankElement = characters.map((char, i) => {
        return <LetterGuessBlank reveal={reveal[i]} key={char + i} char={char} index={i} />
    })

    return (
        <div>
            <Navbar />
            <h1>GAME</h1>
            {guessBlankElement}
            <TurnsLeft />
            <LetterGuessForm handleGuess={handleGuess} />
        </div>
    )
}

export default GamePage