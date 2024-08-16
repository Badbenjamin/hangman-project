import logo from '../logo.svg';
import '../App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        APP
      </header>
      {Outlet}
    </div>
  );
}

export default App;
