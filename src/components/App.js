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
  const [shuffleedWords, setShuffledWords] = useState([])
  // const shuffleWords = [...words]
  console.log(currentWord)

  
  // console.log("words", words)
  // console.log("sw", shuffleWords)

  useEffect(() => {
    fetch("http://localhost:4000/words")
      .then(response => response.json())
      .then(newWords => setWords(newWords));
  }, [])

  useEffect(()=>{
    function shuffleArray(array){
      let i = array.length, j, temp;
      while (--i > 0) {
        j = Math.floor(Math.random() *  (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array
    }
    // shuffleArray(...words)
    setShuffledWords(shuffleArray([...words]))
  }, [words])

  console.log(shuffleedWords)
  console.log(words)

  useEffect(()=>{  
    if (words[0] !== undefined && words[wordIndex] !== undefined) {
      setCurrentWord(words[wordIndex].word)
    } 
  }, [wordIndex])

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

  function editWord(updatedWord, id){
    // console.log(updatedWord)
    // console.log(id)
    fetch(`http://localhost:4000/words/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
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
      element: ((words[0] === undefined) ? null : <GamePage hint={words[wordIndex].hint} currentWord={currentWord} handleNextWord={handleNextWord} />),
      errorElement: <ErrorPage/>
    },
    {
      path: "/add_word",
      element: <AddWordPage removeWord={removeWord} addNewWord={addNewWord} words={words} />,
      errorElement: <ErrorPage/>
    },
    {
      path: "/history",
      element: <WordHistory/>
    },
    {
      path: "/words/:id",
      element: ((words[0] === undefined) ? null : <EditWordPage  editWord={editWord}/>)
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
