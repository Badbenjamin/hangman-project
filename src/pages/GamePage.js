import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"

function GamePage({word}){
    const characters = [...word]
    
    const [wordCharacters, setWordCharacters] = useState([])
    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));

    
    
    useEffect(()=>{      
        setWordCharacters(characters)
        
        // setReveal([false, true, true, true, true])
    } ,[])

    function handleGuess(newGuess){
        setGuesses([...guesses, newGuess])
    }

    // compare wordCharacters array to guesses array
    // map matching indexes to reveal array 

    console.log("guesses", guesses)
    console.log("word char", wordCharacters)
    let matchingCharacters = wordCharacters.map((wordChar, i) => {
        // let guessChar = guesses.map(guessChar => guessChar)
        if (wordChar === guesses.find(guessChar => guessChar === wordChar)) {
            return i
            // setReveal(i)
        }
        // setReveal(i)
    })
  
    // console.log(guesses.map(guessChar => guessChar))
    console.log(matchingCharacters)

    const guessBlankElement = wordCharacters.map((char, i) => {
        return <LetterGuessBlank reveal={reveal[i]}  key={char + i} char={char} index={i}/>
    })

    // console.log(guessBlankElement)
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