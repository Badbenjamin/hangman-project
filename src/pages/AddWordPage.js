import Navbar from "../components/Navbar"

function AddWordPage({word}){
    return(
        <div>
            <Navbar/>
            <h1>Add Word</h1>
            <h2>{word}</h2>
            <h2>ADD WORD FORM</h2>
            <h2>LIST OF OUR WORDS</h2>
        </div>
        
    )
}

export default AddWordPage