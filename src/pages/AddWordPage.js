import AddWordForm from "../components/AddWordForm"
import WordListItem from "../components/WordListItem"
import Navbar from "../components/Navbar"

function AddWordPage({ words, addNewWord, removeWord }) {
 
    const wordListElement = words.map(word => {
        return <WordListItem key={word.id} removeWord={removeWord} word={word} />
    })

    return (
        <div>
            <Navbar />
            <h1>ADD WORD</h1>
            <AddWordForm addNewWord={addNewWord}/>
            <h2>WORDS</h2>
            {wordListElement}
        </div>

    )
}

export default AddWordPage