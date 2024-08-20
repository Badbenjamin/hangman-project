import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import WordHistory from '../pages/WordHistory';


function App() {
  
  const [words, setWords] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
 
  useEffect(() => {
    fetch("http://localhost:4000/words")
      .then(response => response.json())
      .then(newWords => setWords(newWords));
  }, [])

  useEffect(()=>{  
    if (words[0] !== undefined && words[wordIndex] !== undefined) {
      setCurrentWord(words[wordIndex].word)
    } 
  }, [words, wordIndex])

  function handleNextWord(){
    let count = wordIndex
    if (currentWord !== undefined && wordIndex <= words.length -2) {
      count ++
      setWordIndex(count)
    } else  {
      setWordIndex(0)
    }
  }

  function addNewWord(newWord){
    console.log(newWord)
    fetch("http://localhost:4000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWord)
    })
    .then(response => response.json())
    .then(newWordData => setWords([...words, newWordData]))
  }
  
  function removeWord(deletedWordId){
    console.log(deletedWordId)
    fetch(`http://localhost:4000/words/${deletedWordId}`, {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok){
        setWords((words) => words.filter(word =>{
          return word.id !== deletedWordId;
        }))
      }
    })
    
  }

  const routes = [
    {
      path: "/",
      element: ((words[0] === undefined) ? null : <GamePage hint={words[wordIndex].hint} currentWord={currentWord} handleNextWord={handleNextWord} />)
    },
    {
      path: "/add_word",
      element: ((addNewWord === undefined) ? null : <AddWordPage removeWord={removeWord} addNewWord={addNewWord} words={words} />)
    },
    // {
    //   path: "/history",
    //   element: ((words[0] === undefined) ? null : <WordHistory words={words} />)
    // }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
