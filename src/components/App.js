import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import GamePage from '../pages/GamePage';
import AddWordPage from '../pages/AddWordPage';
import WordHistory from '../pages/WordHistory';





function App() {
  const [word, setWord] = useState("WORD")

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

  console.log(word)



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
