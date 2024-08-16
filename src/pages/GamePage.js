import Navbar from "../components/Navbar"

function GamePage({word}){
    return(
        <div>
            <Navbar/>
            <h1>GAME</h1>
            <h2>{word}</h2>
            <h2>BLANK SPACES</h2>
            <h2>LETTER GUESS FORM</h2>
        </div>
    )
}

export default GamePage