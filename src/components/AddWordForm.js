import { useState } from "react"

function AddWordForm({addNewWord}){

    console.log(addNewWord)
    const [formData, setFormData] = useState({
        word: "",
        hint: "",
        difficulty: ""
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()
        addNewWord(formData)
    }

    return(
        <form onSubmit={onSubmit}>
                <div>
                    <label>ADD WORD</label>
                    <input onChange={handleChange} id="newWordInput" name="word" value={formData.name}/>
                </div>
                <div>
                    <label>Hint</label>
                    <input onChange={handleChange} id="hintInput" name="hint" value={formData.hint}/>
                </div> 
                <div>
                    <label for="difficulty">difficulty</label>
                    <select onChange={handleChange} id="difficulty" name="difficulty" value={formData.difficulty}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button type="sumbit">Submit</button>
          </form>
    )
}

export default AddWordForm
