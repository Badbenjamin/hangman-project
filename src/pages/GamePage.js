import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"

function GamePage({word}){

    const characters = [...word]
    
    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));

    useEffect(()=>{
        setReveal(matchingCharacters)
    }, [guesses])

    function handleGuess(newGuess){
        setGuesses([...guesses, newGuess]) 
    }
    
    let matchingCharacters = characters.map((wordChar, i) => {
        if (wordChar === guesses.find(guessChar => guessChar === wordChar)) {
            return true
        } else {
            return false
        }
    })

    const guessBlankElement = characters.map((char, i) => {
        return <LetterGuessBlank reveal={reveal[i]}  key={char + i} char={char} index={i}/>
    })

    return(
        <div>
            <Navbar/>
            <h1>GAME</h1>
            {guessBlankElement}
            <LetterGuessForm handleGuess={handleGuess}/>
        </div>
    )
}

export default GamePage