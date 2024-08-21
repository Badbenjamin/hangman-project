import AddWordForm from "../components/AddWordForm"
import WordList from "../components/WordList"
import Navbar from "../components/Navbar"


import { useState } from "react"

function AddWordPage({ words, addNewWord, removeWord }) {
    const [searchText, setSearchtext] = useState('')

    function onChange(e){
        setSearchtext(e.target.value)
    }

    const filteredWords = words.filter(word => {
        return word.word.includes(searchText.toUpperCase())
    })

    return (
        <div>
            <Navbar />
            <h1>ADD WORD</h1>
            <AddWordForm addNewWord={addNewWord}/>
            <h2>WORDS</h2>
            <div className="searchbar">
                <label htmlFor="search"></label>
                <input
                    type="text"
                    id="search"
                    placeholder="SEARCH WORDS"
                    onChange={onChange}
                    value={searchText.toUpperCase()}
                />
            </div>
             <WordList words={filteredWords} removeWord={removeWord} />
           
        </div>

    )
}

export default AddWordPage