import './GameSelections.css'
import logo from '../TriviaLogo.png'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function GameSelections() {
    const [difficulty, setDifficulty] = useState('blue')
    console.log(difficulty)
    // const [category, setCategory] = useState('')
    // console.log(category)

    function handleChange(event) {
        setDifficulty(event.target.value)
        console.log(difficulty)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }

    return (
        <main>
            <img src={logo} alt="Trivia Logo" className='logo' />
            <h1>Welcome to Trivia Time</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='difficulty' className='difficulty-label'>First, choose your difficulty level.</label>
                <br />
                <select onChange={handleChange} id='difficulty'>
                    <option defaultValue>---Choose One---</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                {/* <label htmlFor='category' className='category-label'>Next, choose your category.</label>
                <br />
                <select onChange={(event) => setCategory(event.target.value)} id='category'>
                    <option defaultValue>---choose one---</option>
                    <option value="Geography">Geography</option>
                    <option value="Sports">Sports</option>
                    <option value="Random">Random</option>
                </select> */}
                <br />
                <button type='submit' className='play-button'>Play</button>
            </form>
        </main>
    )
}

export default GameSelections