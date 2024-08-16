

function LetterGuessBlank({char, handleClick, reveal, index}){

    return(
        <span className="blank" index={index} >{reveal ? char : "_ "}</span>
    )
}

export default LetterGuessBlank