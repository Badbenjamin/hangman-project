import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import LetterGuessBlank from "../components/LetterGuessBlank"
import LetterGuessForm from "../components/LetterGuessForm"
import TurnsLeft from "../components/TurnsLeft"
import DifficultySetting from "../components/DifficultySetting"
import ScoreCard from "../components/ScoreCard"

import './PageStyles.css'


function GamePage({ currentWord, handleNextWord, hint, handleDifficultyChange, difficulty, gameOver }) {

    const characters = [...currentWord]

    const [guesses, setGuesses] = useState([])
    const [reveal, setReveal] = useState(Array(characters.length).fill(false));
    const [wrongGuesses, setWrongGuesses] = useState([])
    const [winOrLoss, setWinOrLoss] = useState([null])

    let winOrLossMessage = ""
    let spanClass = ""
    if (winOrLoss[winOrLoss.length - 1] === false) {
        winOrLossMessage = "YOU'RE BROKE!"
        spanClass = "red"
    } else if (winOrLoss[winOrLoss.length - 1] === true) {
        winOrLossMessage = `YOU'VE GOT ${6 - wrongGuesses.length} DOLLARS!`
        spanClass = "green"
    } else {
        winOrLossMessage = ""
    }

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

    function handleClick() {
        handleNextWord()
        setReveal(Array(characters.length).fill(false))
        setWinOrLoss([...winOrLoss, null])
        setWrongGuesses([])
        setGuesses([])
    }

    function handleGuess(newGuess) {

        if (gameOver === true) {
            return;
        }

        if (winOrLoss.length - 1 === true || winOrLoss.length - 1 === false) {
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
        return <LetterGuessBlank className="guess" winOrLoss={winOrLoss[winOrLoss.length - 1]} reveal={reveal[i]} key={char + i} char={char} index={i} />
    })

    return (
        <div>
            <Navbar />
            <h1>DANG, MAN! <span className={spanClass}>{winOrLossMessage}</span></h1>
            {(winOrLoss.length === 1 && guesses.length === 0) ? <DifficultySetting guesses={guesses} onDifficultyChange={handleDifficultyChange} /> : <div>DIFFICULTY: {difficulty.toUpperCase()}</div>}
            {(wrongGuesses.length >= 5) ? (<h1>{`HINT: ${hint}`}</h1>) : (<></>)}
            {(gameOver) ? <></> : guessBlankElement}
            {(gameOver) ? <></> : <TurnsLeft className="turns-left" winOrLoss={winOrLoss.length - 1} wrongGuesses={wrongGuesses} />}
            {(gameOver) ? <></> : ((winOrLoss[winOrLoss.length - 1] === null) ? (<LetterGuessForm handleClick={handleClick} handleGuess={handleGuess} />) : <button onClick={handleClick}>Next Word</button>)}
            {(winOrLoss.length > 1) ? <ScoreCard className="score_card" gameOver={gameOver} winOrLoss={winOrLoss} /> : <></>}
        </div>
    )
}

export default GamePage