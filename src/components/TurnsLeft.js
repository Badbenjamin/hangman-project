

function TurnsLeft({ wrongGuesses, winOrLoss }) {


    return (
        <div className="turns_left">
            <div>{`GUESSES LEFT: ${6 - wrongGuesses.length}`}</div>
            <div>{`GUESSED LETTERS: ${wrongGuesses}`}</div>
            {(winOrLoss === true) ? <>WINNER</> : (winOrLoss === false) ? <>LOSER</> : <></>}
        </div>
    )
}

export default TurnsLeft