import './ComponentStyles.css'

function TurnsLeft({ wrongGuesses, winOrLoss}) {

    let guessColor;

    if (winOrLoss === true) {
        guessColor = "guess_green"
    } else if (winOrLoss === false) {
        guessColor = "guess_red"
    } else {
        guessColor = ""
    }

    return (
        <div className="turns_left">
            <div>$<span className={guessColor}>{6 - wrongGuesses.length}</span></div>
            <div id="wrong">{wrongGuesses}</div>
        </div>
    )
}

export default TurnsLeft