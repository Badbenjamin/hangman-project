import "./ComponentStyles.css"

function LetterGuessBlank({ char, reveal, index, winOrLoss }) {

    let classStatus;

    if (winOrLoss === true) {
        classStatus = "letter_green"
    } else if (winOrLoss === false && reveal === false) {
        reveal = true
        classStatus = "letter_red"
    } else {
        classStatus = "blank"
    } 

    return (
        <span className={classStatus} index={index} >{reveal ? char : "_ "}</span>
    )
}

export default LetterGuessBlank