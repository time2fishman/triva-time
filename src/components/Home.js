import './Home.css'
import logo from '../img/TriviaLogo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'


function Home({setDifficulty, setCategory, category, difficulty}) {


    function handleDifficultyChange(event) {
        setDifficulty(event.target.value)
        // console.log(difficulty)
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value)
        // console.log(category)
    }



    return (
        <main>
            <img src={logo} alt="Trivia Logo" className='logo' />
            <h1>Welcome to Trivia Time</h1>
            <form>
                <label htmlFor='difficulty' className='difficulty-label'>First, choose your difficulty level</label>
                <br />
                <select onChange={handleDifficultyChange} id='difficulty'>
                    <option defaultValue>--- Choose Difficulty ---</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                <label htmlFor='category' className='category-label'>Next, choose your category</label>
                <br />
                <select onChange={handleCategoryChange} id='category'>
                    <option defaultValue>--- Choose Category ---</option>
                    <option value="9">General Knowledge</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                </select>
                <br />
                <Link to='/play'><button type='submit' className='play-button'>Play</button></Link>
            </form>
        </main>
    )
}

export default Home