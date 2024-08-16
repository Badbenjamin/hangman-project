import App from './components/App';
import GamePage from './pages/GamePage';
import AddWordPage from './pages/AddWordPage';
import WordHistory from './pages/WordHistory';

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/game",
          element: <GamePage />
        },
        {
          path: "/add_word",
          element: <AddWordPage />
        }, 
        {
            path:"/history",
            element: <WordHistory/>
        }
      ]
    }
  ]

  export default routes