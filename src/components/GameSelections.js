import './GameSelections.css'
import logo from '../TriviaLogo.png'

function GameSelections() {
    return (
        <main>
            <img src={logo} alt="Trivia Logo" className='logo' />
            <h1>Welcome to Trivia Time</h1>
            <form>
                <label htmlFor='difficulty'>First, choose your difficulty level.</label>
                <select id='difficulty'>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <label htmlFor='category'>Next, choose your category.</label>
                <select id='category'>
                    <option value="Easy">All</option>
                    <option value="Medium">asdf</option>
                    <option value="Hard">Hardpio</option>
                </select>
                <button type='submit'>Play</button>
            </form>
        </main>
    )
}

export default GameSelections