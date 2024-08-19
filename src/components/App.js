import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import WordHistory from '../pages/WordHistory';

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/words")
      .then(response => response.json())
      .then(newWords => setWords(newWords))
  }, [])

  console.log(words)

  const routes = [
    {
      path: "/",
      element: ((words[0] === undefined) ? null : <GamePage words={words} />)
    },
    {
      path: "/add_word",
      element: <AddWordPage words={words} />
    },
    {
      path: "/history",
      element: <WordHistory words={words} />
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
