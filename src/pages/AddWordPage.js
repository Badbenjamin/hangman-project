import AddWordForm from "../components/AddWordForm"
import Navbar from "../components/Navbar"

function AddWordPage({ word }) {
    return (
        <div>
            <Navbar />
            <h1>Add Word</h1>
            <AddWordForm/>
            <h2>LIST OF OUR WORDS</h2>
        </div>

    )
}

export default AddWordPage