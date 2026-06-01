
import React from 'react'
import { useState, useEffect } from 'react'
function TimerComponent(){

    const [time, setTime] = useState()

    useEffect(function(){
        
        setInterval(function(){
             setTime(PrevTime => PrevTime + 1)
        }, 1000)
            
        // return function(){
        //     alert("cleaned")

        // }
    }, [time])

    return(
        <div>
            <h1>Timer Component</h1>
            <p>{time}</p>
        </div>
    )
}

export default TimerComponent