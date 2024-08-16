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
        let matchingCharacters = wordCharacters.map((wordChar, i) => {
            if (wordChar === guesses.find(guessChar => guessChar === wordChar)) {
                return true
                // setReveal()
            } else {
                return false
            }
        })
        setReveal(matchingCharacters)
    }
   
    
  
    // console.log(guesses.map(guessChar => guessChar))
    
    // const foundMatch = 

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