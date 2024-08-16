import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"

function GamePage({word}){
    const [wordCharacters, setWordCharacters] = useState([])

    // console.log( typeof word)
    
    useEffect(()=>{     
        const characters = [...word]
        setWordCharacters(characters)
    }, [])

    console.log(wordCharacters)

    const guessBlankElement = wordCharacters.map((char, i) => {
        return <LetterGuessBlank key={i} char={char} />
    })

    return(
        <div>
            <Navbar/>
            <h1>GAME</h1>
            <h2>{word}</h2>
            {guessBlankElement}
            <LetterGuessForm/>
        </div>
    )
}

export default GamePage