import WordListItem from "./WordListItem"

function WordList({words, removeWord}){

    const wordListElement = words.map(word => {
        return <WordListItem key={word.id} removeWord={removeWord} word={word} />
    })

    return(
      <>{wordListElement}</>
    )
}

export default WordList