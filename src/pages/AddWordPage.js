import AddWordForm from "../components/AddWordForm"
import WordListItem from "../components/WordListItem"
import Navbar from "../components/Navbar"

function AddWordPage({ words, addNewWord, removeWord }) {
    console.log(words)
    const wordListElement = words.map(word => {
        return <WordListItem removeWord={removeWord} word={word} />
    })

    return (
        <div>
            <Navbar />
            <h1>Add Word</h1>
            <AddWordForm addNewWord={addNewWord}/>
            <h2>LIST OF OUR WORDS</h2>
            {wordListElement}
        </div>

    )
}

export default AddWordPage