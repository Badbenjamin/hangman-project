import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"


function EditWordPage({editWord, words}){
    console.log(words)
    const {id} = useParams()
    const navigate = useNavigate()

    const [word, setWord] =useState({
        word: "",
        hint: "",
        difficulty: ""
    })
    const [formData, setFormData] = useState({
        word: word.word,
        hint: word.hint,
        difficulty: word.difficulty
    }) 

    useEffect(()=>{
        for (const selectedWord of words){
            // console.log(selectedWord.id)
            if (selectedWord.id === parseInt(id)){
                setWord(selectedWord)
            }
        }
    }, [])

    useEffect(()=>{
        setFormData(word)
    }, [word])

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()
        const editedWordForm = {
            ...formData,
            word: formData.word.toUpperCase()
        }
        editWord(editedWordForm, word.id)
    }

    function handleBackClick(){
        navigate("/add_word")
    }

    return(
    <div>
        <Navbar/>
        <h1>{formData.word}</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label>EDIT WORD</label>
                <input onChange={handleChange} id="newWordInput" name="word" value={formData.word}/>
            </div>
            <div>
                <label>EDIT HINT</label>
                <input onChange={handleChange} id="hintInput" name="hint" value={formData.hint}/>
            </div> 
            <div>
                <label form="difficulty">EDIT DIFFICULTY</label>
                <select onChange={handleChange} id="difficulty" name="difficulty" value={formData.difficulty}>
                    <option value="easy">EASY</option>
                    <option value="medium">MEDIUM</option>
                    <option value="hard">HARD</option>
                </select>
            </div>
            <button type="sumbit">SUMBIT</button>
        </form>
        <button onClick={handleBackClick} type="back">BACK</button>
    </div>
    )
}

export default EditWordPage