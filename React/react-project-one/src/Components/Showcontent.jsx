import React from 'react'

function Showcontent(props) {
  return (
    <div>
        <button onClick={function(){props.setShow(props.id)}}>
            Toggle Content
        </button>
        {props.show === props.id && props.children}
      
    </div>
  )
}

export default Showcontent
