import { useEffect, useState } from 'react'

function Play({ difficulty, category }) {
    const [results, setResults] = useState([])

    function rightAnswer() {
        return <p>"Correct!"</p>
    }
    console.log(results)
    console.log(difficulty)
    console.log(category)
    function getResults() {
        const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&category=${category}`
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

    // console.log("loop " + i)
    // console.log(results.length)
    // console.log(result.incorrect_answers)

    return (
        <div>
            {results.map((result, i) => {
                return (
                    <>
                        <p><span>{i + 1}</span><span>. </span><span dangerouslySetInnerHTML={{__html: result.question}}></span></p>
                        <input onChange={rightAnswer} type='radio' id='correctAnswer' name='correctAnswer' value={result.correct_answer} />
                        <label htmlFor='correctAnswer' dangerouslySetInnerHTML={{__html:result.correct_answer}}></label>
                        <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[0]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[0]}</label>
                        <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[1]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[1]}</label>
                        <input type='radio' id='incorrectAnswer' name='incorrectAnswer' value={result.incorrect_answers[2]} />
                        <label htmlFor='incorrectAnswer'>{result.incorrect_answers[2]}</label>
                    </>
                )
            })}
        </div>
    )

    // return (
    //     <>
    //         <div>
    //             <p>{results[0].question}</p>
    //             <input onSelect={rightAnswer} type='radio' id='correct' />
    //             <label htmlFor='correct'>{results[0].correct_answer}</label>
    //             <input type='radio' id='radio-button' />
    //             <label htmlFor='radio-button'>{results[0].incorrect_answers[0]}</label>
    //         </div>

    //         <div>
    //             <p>{results[1].question}</p>
    //             <input onSelect={rightAnswer} type='radio' id={`correct${1}`} />
    //             <label htmlFor={`correct${1}`}>{results[1].correct_answer}</label>
    //             <input type='radio' id='radio-button' />
    //             <label htmlFor='radio-button'>{results[1].incorrect_answers[0]}</label>
    //         </div>
    //     </>
    // )

    // return (
    //     <main>
    //         {/* <p>{results[1].question}</p>
    //         <p>{results[1].incorrect_answers}</p>
    //         <p>{results[1].correct_answer}</p> */}
    //     </main>
    // )
}

export default Play