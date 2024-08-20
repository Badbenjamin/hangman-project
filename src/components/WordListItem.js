import { Link } from "react-router-dom"

function WordListItem({word, removeWord}){
    // console.log(word)

    function onDelete(){
        removeWord(word.id)
    }

    return(
        <>
            <h2>{word.word}</h2>
            <div>HINT: {word.hint}</div>
            <div>DIFFICULTY: {word.difficulty}</div>
            <button onClick={onDelete}>REMOVE</button><button><Link to={`/words/${word.id}`}>EDIT</Link></button>
        </>
    )
}

export default WordListItem