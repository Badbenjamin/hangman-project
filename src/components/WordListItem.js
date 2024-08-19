function WordListItem({word, removeWord}){

    function onClick(){
        removeWord(word.id)
    }

    return(
        <>
            <h2>{word.word}</h2>
            <div>HINT: {word.hint}</div>
            <div>DIFFICULTY: {word.difficulty}</div>
            <button onClick={onClick}>REMOVE</button>
        </>
    )
}

export default WordListItem