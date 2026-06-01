    import React from 'react'
    import { useState, useEffect } from 'react'

    const RandomQuote = () => {
        const [quote, setQuote] = useState('')
        const [loading, setLoading] = useState(true)

        async function fetchQuote(){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('Failed to fetch the quote')
            }
            let data = await response.json()
            setQuote(data.id)
            setLoading(false)
        }

        useEffect(function(){

            fetchQuote()

        },[])


    return (
        <div>
            {loading ? <p>Loading...</p> : <p>{quote}</p>}
        </div>
    )
    }

    export default RandomQuote
