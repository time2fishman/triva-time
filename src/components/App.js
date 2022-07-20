import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Play from './Play';
import Questions from './Questions';
import { Routes, Route, Link, useSearchParams } from 'react-router-dom'


function App() {
  const [difficulty, setDifficulty] = useState()
  console.log(difficulty)
  const [category, setCategory] = useState()
  console.log(category)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home difficulty={difficulty} setDifficulty={setDifficulty} category={category} setCategory={setCategory} />} />
        <Route path='/play' element={<Play difficulty={difficulty} category={category} />} />
        {/* <Questions /> */}
      </Routes>
    </div>
  );
}

export default App;
