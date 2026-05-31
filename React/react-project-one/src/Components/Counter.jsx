
import React from 'react'
import { useState } from 'react'

const Counter = (props) => {

    // const [count, setCount]=useState(0);
  return (
    <div>
        {/* <p>You clicked {count}</p>
        <button onClick={function(){setCount(count+1)}}>Click Me</button> */}
        {props.children}
        <button onClick={props.increment}>
            {props.text}
        </button>
        
        

      
    </div>
  )
}

export default Counter
