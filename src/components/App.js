import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import WordHistory from '../pages/WordHistory';
import ErrorPage from '../pages/ErrorPage';
import EditWordPage from '../pages/EditWordPage';


function App() {

  const [words, setWords] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [difficulty, setDifficultly] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/words")
      .then(response => response.json())
      .then(newWords => setWords(shuffleArray(newWords)));
  }, [])


  function shuffleArray(array) {
    let i = array.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array
  }

  
  useEffect(() => {
    if ((words[0] !== undefined && words[wordIndex] !== undefined)) {
      let wordDifficulty = [...words]
      
      if (difficulty === "easy") {
        wordDifficulty = wordDifficulty.filter((word) => word.difficulty === "easy")
      } else if (difficulty === "medium") {
        wordDifficulty = wordDifficulty.filter((word) => word.difficulty === "medium")
      } else if (difficulty === "hard") {
        wordDifficulty = wordDifficulty.filter((word) => word.difficulty === "hard")
      } else {
        wordDifficulty = wordDifficulty
      }  

      if (wordDifficulty[wordIndex] !== undefined) {
        setCurrentWord(wordDifficulty[wordIndex].word)
      } else if (wordDifficulty[wordIndex] === undefined) {
        handleNextWord()
      }
    }
  }, [words, wordIndex, difficulty])

  function handleNextWord() {
    let count = wordIndex
    if (currentWord !== undefined && wordIndex <= words.length - 2) {
      count++
      setWordIndex(count)
    } else {
      setWordIndex(0)
    }
  }

  function addNewWord(newWord) {
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

  function removeWord(deletedWordId) {
    fetch(`http://localhost:4000/words/${deletedWordId}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          setWords((words) => words.filter(word => {
            return word.id !== deletedWordId;
          }))
        }
      })
  }

  function handleDifficultyChange(currentDifficulty){
    console.log(currentDifficulty)
    setDifficultly(currentDifficulty)
  } 

  function editWord(updatedWord, id) {
    // console.log(updatedWord)
    // console.log(id)
    fetch(`http://localhost:4000/words/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedWord)
    })
      .then(r => r.json())
      .then(updatedWordData => setWords(words => words.map(word => {
        if (updatedWordData.id === word.id) {
          return updatedWordData
        } else {
          return word
        }
      })))
  }

  const routes = [
    {
      path: "/",
      element: ((words[0] === undefined) ? null : <GamePage hint={words[wordIndex].hint} currentWord={currentWord} handleDifficultyChange={handleDifficultyChange} handleNextWord={handleNextWord} />),
      errorElement: <ErrorPage />
    },
    {
      path: "/add_word",
      element: <AddWordPage removeWord={removeWord} addNewWord={addNewWord} words={words} />,
      errorElement: <ErrorPage />
    },
    {
      path: "/history",
      element: <WordHistory />
    },
    {
      path: "/words/:id",
      element: ((words[0] === undefined) ? null : <EditWordPage editWord={editWord} />)
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
