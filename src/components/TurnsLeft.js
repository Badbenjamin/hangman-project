

function TurnsLeft({ wrongGuesses, winOrLoss, hint }) {


    return (
        <div className="turns_left">
            <div>{`GUESSES LEFT: ${6 - wrongGuesses.length}`}</div>
            <div>{`GUESSED LETTERS: ${wrongGuesses}`}</div>
            {/* {(wrongGuesses.length = 5) ? <>HINT</> : <></>} */}
            {(winOrLoss === true) ? <>WINNER</> : (winOrLoss === false) ? <>LOSER</> : <></>}
        </div>
    )
}

export default TurnsLeft