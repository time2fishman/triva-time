import { useEffect, useState } from 'react'

function Play({ difficulty, category }) {
    const [results, setResults] = useState([])

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

    return (
        <main>
            <p>{results[1].question}</p>
        </main>
    )
}

export default Play