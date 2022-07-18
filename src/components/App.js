import logo from '../logo.svg';
import './App.css';
import GameSelections from './GameSelections';
import Navbar from './Navbar';
import Play from './Play';
import Questions from './Questions';
import { Routes, Route, Link, useSearchParams } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <GameSelections />
      <Play />
      <Questions />
    </div>
  );
}

export default App;
