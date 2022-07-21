import { useEffect, useState } from 'react'
import './Play.css'
import { Navigate } from 'react-router-dom'

function Play({ difficulty, category }) {
    const [results, setResults] = useState([])
    const [userAnswer, setUserAnswer] = useState()

    function handleAnswer(event) {
        setUserAnswer(event.target.value)
    }

    function getResults() {
        const url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&category=${category}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setResults(data.results)
            })
            .catch((err) => err)
    }

    useEffect(() => {
        getResults()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!difficulty) {
        return <Navigate to='/' />
    }

    if (results.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <main className='question-box'>
            {results.map((result, i) => {
                return (
                    <div key={`correctKey:${i}`}>
                        <p className='question' dangerouslySetInnerHTML={{ __html: result.question }}></p>
                        <div className='possible-answers'>
                            <div className='choice'>
                                <input className='answer' onChange={handleAnswer} type='radio' id='correctAnswer' name='correctAnswer' value={result.correct_answer} />
                                <label className='answers' htmlFor='correctAnswer' dangerouslySetInnerHTML={{ __html: result.correct_answer }}></label>
                            </div>

                            {result.incorrect_answers.map((incorrectAnswer, i) => (
                                <div key={`incorrectKey:${i}`} className='choice'>
                                    <input className='answers' onChange={handleAnswer} type='radio' id='incorrectAnswer' name='incorrectAnswer' value={incorrectAnswer} />
                                    <label className='answers' htmlFor='incorrectAnswer' dangerouslySetInnerHTML={{ __html: incorrectAnswer }}></label>
                                </div>
                            ))}
                            {(userAnswer === results[0].correct_answer) && <div className='next-question'>
                                <h2>Correct!</h2>
                                <button className='next-question' type='button' onClick={getResults}>Next Question</button>
                            </div>}
                            {(userAnswer === results[0].incorrect_answers[0] || userAnswer === results[0].incorrect_answers[1] || userAnswer === results[0].incorrect_answers[2]) && <div className='next-question'>
                                <h2>Incorrect, better luck next time.</h2>
                                <button className='next-question' type='button' onClick={getResults}>Next Question</button>
                            </div>}
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default Play