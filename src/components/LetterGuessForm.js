import { useState } from "react"

function LetterGuessForm(){
    const [guessChar, setGuessChar] = useState("")

    function handleChange(e){
        let guess = (e.target.value).toUpperCase()
        if (guess.length === 1) {
            setGuessChar(guess)
        } else if (guess.length > 1) {
            setGuessChar(guess.charAt(guess.length - 1))
        }
    }

    return(
        <form  >
            <label>guess letter</label>
            <input onChange={handleChange}  id="letterInput" name="letter" value={guessChar}/>
            <button type="sumbit">Submit</button>
        </form>
    )
}

export default LetterGuessForm