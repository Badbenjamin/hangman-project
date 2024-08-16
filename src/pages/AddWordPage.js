import Navbar from "../components/Navbar"

function AddWordPage({word}){
    return(
        <div>
            <Navbar/>
            <h1>Add Word</h1>
            <h2>{word}</h2>
        </div>
        
    )
}

export default AddWordPage