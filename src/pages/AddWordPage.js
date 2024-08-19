import AddWordForm from "../components/AddWordForm"
import Navbar from "../components/Navbar"

function AddWordPage({ word, addNewWord }) {
    return (
        <div>
            <Navbar />
            <h1>Add Word</h1>
            <AddWordForm word={word} addNewWord={addNewWord}/>
            <h2>LIST OF OUR WORDS</h2>
        </div>

    )
}

export default AddWordPage