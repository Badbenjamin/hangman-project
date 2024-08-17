import "./ComponentStyles.css"

function LetterGuessBlank({ char, reveal, index }) {

    return (
        <span className="blank" index={index} >{reveal ? char : "_ "}</span>
    )
}

export default LetterGuessBlank