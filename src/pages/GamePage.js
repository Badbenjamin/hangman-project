import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"
import TurnsLeft from "../components/TurnsLeft"

function GamePage({ currentWord, handleNextWord, hint }) {
   
    const characters = [...currentWord]
    console.log(currentWord)
  
    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));
    const [wrongGuesses, setWrongGuesses] = useState([])
    const [winOrLoss, setWinOrLoss] = useState([null])

    useEffect(() => {
        setReveal(matchingCharacters)
    }, [guesses])

    useEffect(() => {
    
        if ((reveal.length !== 0) && reveal.length === reveal.filter(bool => bool === true).length) {
            setWinOrLoss(true);
        } else if (wrongGuesses.length === 6) {
            setWinOrLoss(false);
        }
    })

    function handleClick(){
        handleNextWord()
        setReveal(Array(characters.length).fill(false))
        setWinOrLoss([null])
        setWrongGuesses([])
        setGuesses([])
    }

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
            <h1>GUESS THE WORD!</h1>
            {/* {(wrongGuesses.length >= 5) ? (<h1>{`HINT: ${hint}`}</h1>) : (<></>)} */}
            {guessBlankElement}
            <TurnsLeft className="turns-left"  winOrLoss={winOrLoss} wrongGuesses={wrongGuesses} />
            {(winOrLoss[0] === null) ? (<LetterGuessForm handleClick={handleClick} handleGuess={handleGuess} />) : <button onClick={handleClick}>Next Word</button>}
        </div>
    )
}

export default GamePage