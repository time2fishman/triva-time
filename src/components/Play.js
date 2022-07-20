import { useEffect, useState } from 'react'

function Play({ difficulty, category }) {
    const [results, setResults] = useState([])
    const [userAnswer, setUserAnswer] = useState([])

    function rightAnswer(event) {
        setUserAnswer(event.target.value)
        console.log(userAnswer)
    }

    console.log(results)
    console.log(difficulty)
    console.log(category)
    function getResults() {
        const url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&category=${category}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(data.results)
            })
            .catch((err) => err)
    }

    useEffect(() => {
        getResults()
    }, [])
    // console.log(aresults[1].question)

    if (results.length === 0) {
        return <p>Loading...</p>
    }

    if (userAnswer === results[0].correct_answer) {
        return (
            <div>
                <h1>Correct!</h1>
            </div>
        )
    }

    // console.log("loop " + i)
    // console.log(results.length)
    // console.log(result.incorrect_answers)

    return (
        <div>
            {results.map((result, i) => {
                return (
                    <>
                        <p><span>{i + 1}</span><span>. </span><span dangerouslySetInnerHTML={{ __html: result.question }}></span></p>
                        <input onChange={rightAnswer} type='radio' id='correctAnswer' name='correctAnswer' value={result.correct_answer} />
                        <label htmlFor='correctAnswer' dangerouslySetInnerHTML={{ __html: result.correct_answer }}></label>

                        {result.incorrect_answers.map((incorrectAnswer) => (
                            <>
                                <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={incorrectAnswer} />
                                <label htmlFor='incorrectAnswer'>{incorrectAnswer}</label>
                            </>
                        ))}

                        {/* <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[0]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[0]}</label>
                        <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[1]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[1]}</label>
                        <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[2]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[2]}</label> */}
                    </>
                )
            })}
        </div>
    )
}

export default Play