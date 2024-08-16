import { useState } from "react"

function LetterGuessBlank({char, handleClick, reveal, index}){
    // const [reveal, setReveal] = useState(true)

    function onClick(){
        handleClick(index)
        // console.log(index)
    }

    return(
        <span index={index} onClick={onClick}>{reveal ? "_ " : char}</span>
    )
}

export default LetterGuessBlank