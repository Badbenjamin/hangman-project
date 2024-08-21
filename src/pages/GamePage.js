import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"
import TurnsLeft from "../components/TurnsLeft"
import DifficultySetting from "../components/DifficultySetting"
import ScoreCard from "../components/ScoreCard"


function GamePage({ currentWord, handleNextWord, hint, handleDifficultyChange }) {
   
    const characters = [...currentWord]
  
    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));
    const [wrongGuesses, setWrongGuesses] = useState([])
    const [winOrLoss, setWinOrLoss] = useState([null])

    console.log(currentWord)

    useEffect(() => {
        setReveal(matchingCharacters)
    }, [guesses])

    useEffect(() => {
    
        if ((reveal.length !== 0) && reveal.length === reveal.filter(bool => bool === true).length) {
            setWinOrLoss([...winOrLoss, true]);
        } else if (wrongGuesses.length === 6) {
            setWinOrLoss([...winOrLoss, false]);
        }
    }, [reveal])

    function handleClick(){
        handleNextWord()
        setReveal(Array(characters.length).fill(false))
        setWinOrLoss([...winOrLoss, null])
        setWrongGuesses([])
        setGuesses([])
    }

    function handleGuess(newGuess) {

        if (winOrLoss.length - 1 === true || winOrLoss.length -1 === false) {

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
        return <LetterGuessBlank className="guess" winOrLoss={winOrLoss[winOrLoss.length -1]} reveal={reveal[i]} key={char + i} char={char} index={i} />
    })

    return (
        <div>
            <Navbar />
            <h1>GUESS THE WORD!</h1>
            <DifficultySetting onDifficultyChange={handleDifficultyChange} />
            {(wrongGuesses.length >= 5) ? (<h1>{`HINT: ${hint}`}</h1>) : (<></>)}
            {guessBlankElement}
            <TurnsLeft className="turns-left"  winOrLoss={winOrLoss.length -1} wrongGuesses={wrongGuesses} />
            {(winOrLoss[winOrLoss.length-1] === null) ? (<LetterGuessForm handleClick={handleClick} handleGuess={handleGuess} />) : <button onClick={handleClick}>Next Word</button>}
            <ScoreCard winOrLoss={winOrLoss}/>
        </div>
    )
}

export default GamePage