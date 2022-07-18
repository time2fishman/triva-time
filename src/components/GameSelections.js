import './GameSelections.css'
import logo from '../TriviaLogo.png'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function GameSelections() {
    const [difficulty, setDifficulty] = useState()
    console.log(difficulty)
    const [category, setCategory] = useState()
    console.log(category)

    function handleDifficultyChange(event) {
        setDifficulty(event.target.value)
        console.log(difficulty)
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value)
        console.log(category)
    }

    function handleSubmit(event) {
        const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&category=${category}`
        event.preventDefault()
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
        // fetch(`https://opentdb.com/api.php?amount=10&category=${category}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //     })
    }

    return (
        <main>
            <img src={logo} alt="Trivia Logo" className='logo' />
            <h1>Welcome to Trivia Time</h1>
            <form onSubmit={handleSubmit}>
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
                <button type='submit' className='play-button'>Play</button>
            </form>
        </main>
    )
}

export default GameSelections

// {
//     "trivia_categories": [
//         {
//             "id": 9,
//             "name": "General Knowledge"
//         },
//         {
//             "id": 10,
//             "name": "Entertainment: Books"
//         },
//         {
//             "id": 11,
//             "name": "Entertainment: Film"
//         },
//         {
//             "id": 12,
//             "name": "Entertainment: Music"
//         },
//         {
//             "id": 13,
//             "name": "Entertainment: Musicals & Theatres"
//         },
//         {
//             "id": 14,
//             "name": "Entertainment: Television"
//         },
//         {
//             "id": 15,
//             "name": "Entertainment: Video Games"
//         },
//         {
//             "id": 16,
//             "name": "Entertainment: Board Games"
//         },
//         {
//             "id": 17,
//             "name": "Science & Nature"
//         },
//         {
//             "id": 18,
//             "name": "Science: Computers"
//         },
//         {
//             "id": 19,
//             "name": "Science: Mathematics"
//         },
//         {
//             "id": 20,
//             "name": "Mythology"
//         },
//         {
//             "id": 21,
//             "name": "Sports"
//         },
//         {
//             "id": 22,
//             "name": "Geography"
//         },
//         {
//             "id": 23,
//             "name": "History"
//         },
//         {
//             "id": 24,
//             "name": "Politics"
//         },
//         {
//             "id": 25,
//             "name": "Art"
//         },
//         {
//             "id": 26,
//             "name": "Celebrities"
//         },
//         {
//             "id": 27,
//             "name": "Animals"
//         },
//         {
//             "id": 28,
//             "name": "Vehicles"
//         },
//         {
//             "id": 29,
//             "name": "Entertainment: Comics"
//         },
//         {
//             "id": 30,
//             "name": "Science: Gadgets"
//         },
//         {
//             "id": 31,
//             "name": "Entertainment: Japanese Anime & Manga"
//         },
//         {
//             "id": 32,
//             "name": "Entertainment: Cartoon & Animations"
//         }
//     ]
// }