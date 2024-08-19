import { useState } from "react"

function LetterGuessForm({ handleGuess, handleClick }) {
    const [guessChar, setGuessChar] = useState("")

    function handleChange(e) {
        let guess = (e.target.value).toUpperCase()
        if (guess.length === 1) {
            setGuessChar(guess)
        } else if (guess.length > 1) {
            setGuessChar(guess.charAt(guess.length - 1))
        }
    }

    function onGuessSubmit(e) {
        e.preventDefault()
        handleGuess(guessChar)
        setGuessChar('')
    }

    function onClick(){
        handleClick()
        // console.log("click")
    }

    return (
        <div>
          <form onSubmit={onGuessSubmit} >
                <label>guess letter</label>
                <input onChange={handleChange} id="letterInput" name="letter" value={guessChar} />
                <button type="sumbit">Submit</button>
          </form>
                <button onClick={onClick} type="skip">Skip Word</button>
        </div>
    )
}

export default LetterGuessForm