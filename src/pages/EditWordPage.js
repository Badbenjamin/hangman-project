import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditWordPage(){

    const navigate = useNavigate()
    const {id} = useParams()

    const [word, setWord] =useState({
        id: 0,
        word: "",
        hint: "",
        difficulty: ""
    })
    const [formData, setFormData] = useState({
        id: 1,
        word: "",
        hint: "",
        difficulty: ""
    }) 

    useEffect(()=>{
        fetch(`http://localhost:4000/words/${id}`)
        .then(r=>r.json())
        .then(wordData => setWord(wordData))

    }, [])

    console.log(word)
    // console.log(word.word)

    function handleChange(){

    }

    function onSubmit(){

    }


    return(
    <div>
        <h1>{word.word}</h1>
        
        <form onSubmit={onSubmit}>
            <div>
                <label>EDIT WORD</label>
                <input onChange={handleChange} id="newWordInput" name="word" value={formData.word}/>
            </div>
            <div>
                <label>Hint</label>
                <input onChange={handleChange} id="hintInput" name="hint" value={formData.hint}/>
            </div> 
            <div>
                <label form="difficulty">difficulty</label>
                <select onChange={handleChange} id="difficulty" name="difficulty" value={formData.difficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <button type="sumbit">Submit</button>
        </form>
    </div>
    )
}

export default EditWordPage