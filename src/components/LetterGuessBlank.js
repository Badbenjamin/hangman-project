import { useState } from "react"

function LetterGuessBlank({char}){
    const [reveal, setReveal] = useState(true)

    function handleClick(){
        setReveal(!reveal)
    }

    return(
        <span onClick={handleClick}>{reveal ? 0 : char}</span>
    )
}

export default LetterGuessBlank