import { useState } from "react"

function AddWordForm(){
    const [formData, setFormData] = useState({
        id: 1,
        word: "",
        hint: "",
        difficulty: ""
    })

    return(
        <form>
                <div>
                    <label>ADD WORD</label>
                    <input id="newWordInput" name="word" />
                </div>
                <div>
                    <label>Category</label>
                    <input id="categoryInput" name="category" />
                </div>  
                <div>
                    <label>Hint</label>
                    <input id="hintInput" name="hint" />
                </div> 
                <div>
                    <label for="difficulty">difficulty</label>
                    <select id="difficulty">
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
