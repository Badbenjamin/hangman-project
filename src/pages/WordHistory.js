import Navbar from "../components/Navbar"

function WordHistory({word}){
    return(
        <div>
        <Navbar/>
        <h1>WORD HISTORY</h1>
        <h2>{word}</h2>
        <h2>WORD LIST SORT DROPDOWN</h2>
        <h2>RANKED LIST</h2>
    </div>
    )
}

export default WordHistory