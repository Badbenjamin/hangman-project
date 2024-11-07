import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useState, useEffect } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import History from '../pages/History.js';
import ErrorPage from '../pages/ErrorPage';
import EditWordPage from '../pages/EditWordPage';

import {wordList} from './WordListObject.js'


function App() {

  const [words, setWords] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [difficulty, setDifficultly] = useState("mix")
  const [gameOver, setGameOver] = useState(false)
  const [currentHint, setCurrentHint] = useState('')

  useEffect(() => {
    setWords(shuffleArray(wordList))
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
      let wordsByDifficulty = [...words]
      
      if (difficulty === "easy") {
        wordsByDifficulty = wordsByDifficulty.filter((word) => word.difficulty === "easy")
      } else if (difficulty === "medium") {
        wordsByDifficulty = wordsByDifficulty.filter((word) => word.difficulty === "medium")
      } else if (difficulty === "hard") {
        wordsByDifficulty = wordsByDifficulty.filter((word) => word.difficulty === "hard")
      } 

      if (wordsByDifficulty[wordIndex] !== undefined) {
        setCurrentWord(wordsByDifficulty[wordIndex].word)
        setCurrentHint(wordsByDifficulty[wordIndex].hint)
      } else if (wordsByDifficulty[wordIndex] === undefined) {
        setGameOver(true)
      } 
    } 
  }, [words, wordIndex, difficulty])

  function handleNextWord() {
    let count = wordIndex
    if (currentWord !== undefined && wordIndex <= words.length - 2) {
      count++
      setWordIndex(count)
    } else {
      setGameOver(true)
    }
  }

  function addNewWord(newWord) {
    const newWords = [...words]
    newWords.push(newWord)
    setWords(shuffleArray(newWords))
  }


  function removeWord(deletedWord) {
    setWords((words) => words.filter(word => {
      return word.word !== deletedWord
    }))
  }

  function handleDifficultyChange(currentDifficulty){
    setDifficultly(currentDifficulty)
  } 

  function editWord(updatedWord) {
    const newWords = words.map((word) =>{
      if (updatedWord.id === word.id) {
        return updatedWord;
      } else {
        return word
      }
    })
    setWords(newWords)
  }

  const routes = [
    {
      path: "/",
      element: <GamePage gameOver={gameOver} hint={currentHint} currentWord={currentWord} difficulty={difficulty} handleDifficultyChange={handleDifficultyChange} handleNextWord={handleNextWord} />,
      errorElement: <ErrorPage />
    },
    {
      path: "/add_word",
      element: <AddWordPage removeWord={removeWord} addNewWord={addNewWord} words={words} />,
      errorElement: <ErrorPage />
    },
    {
      path: "/history",
      element: <History />
    },
    {
      path: "/words/:id",
      element: <EditWordPage editWord={editWord} words={words} />
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
