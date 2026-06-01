import React from 'react'
import { useContext } from 'react'
import { themecontext } from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(themecontext);

    function change(){
        if(theme === 'beige'){
            setTheme('dark')
        }
        else{
            setTheme('beige')
        }
    }
  return (
    <div>
        <button onClick={change}>Change Theme</button>
      
    </div>
  )
}

export default ChildC
