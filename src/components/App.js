import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import WordHistory from '../pages/WordHistory';

function App() {
  const [word, setWord] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/words")
    .then(response=>response.json())
    .then(newWords => setWord(newWords[0].word))
  }, [])
 
  // console.log(word)

  const routes = [
    {
        path: "/",
        element: <GamePage word={word}/>
    },
    {
        path: "/add_word",
        element: <AddWordPage word={word}/>
    }, 
    {
        path:"/history",
        element: <WordHistory word={word}/>
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
