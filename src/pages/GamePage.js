import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"

function GamePage({word}){
    const characters = [...word]
    const [wordCharacters, setWordCharacters] = useState([])
    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(true));

    // console.log(reveal)
    
    useEffect(()=>{      
        setWordCharacters(characters)
    } ,[])

    function handleGuess(newGuess){
        setGuesses([...guesses, newGuess])
    }

    function handleClick(index){
        // console.log(index)
        // setReveal(index)
    }

    // console.log(guesses)
    // console.log(wordCharacters)

    const guessBlankElement = wordCharacters.map((char, i) => {
        return <LetterGuessBlank reveal={reveal[i]} handleClick={() => handleClick(i)}  key={char + i} char={char} index={i}/>
    })

    return(
        <div>
            <Navbar/>
            <h1>GAME</h1>
            <h2>{word}</h2>
            {guessBlankElement}
            <LetterGuessForm handleGuess={handleGuess}/>
        </div>
    )
}

export default GamePage