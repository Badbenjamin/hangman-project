

function TurnsLeft({ wrongGuesses }) {
    return (
        <div className="turns_left">
            <div>{`GUESSES LEFT: ${6 - wrongGuesses.length}`}</div>
            <div>{`GUESSED LETTERS: ${wrongGuesses}`}</div>
        </div>
    )
}

export default TurnsLeft