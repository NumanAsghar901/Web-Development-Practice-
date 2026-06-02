
import './App.css'

import Cards from './Components/Cards'
import nomi from './assets/nomi.jpeg'
import Counter from './Components/Counter'
import { useState, useEffect } from 'react'
import Showcontent from './Components/Showcontent'
import TimerComponent from './Components/TimerComponent'
import RandomQuote from './Components/RandomQuote'
import Form from './Components/Form'
import ChildA from './Components/ChildA'
import { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Students from './Pages/Students'
import StudentDetail from './Pages/StudentDetail'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import axios from 'axios'

//const usercontext= createContext();
const themecontext= createContext();

function App() {
  const [count, setCount]=useState(0);
   function increment(){
     setCount(count+1);
   }

  const [name, setName] = useState('')

  const [show, setShow] = useState('none')

  // useEffect(function(){
  //   alert('I will run on each render')
  // })

  //const [user, setUser] = useState('Numan Asghar')
  const [theme, setTheme] = useState('light');

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function showme(){
    const response = await axios.get('http://localhost:5000/api/quote')
    setQuote(response.data.text)
    setAuthor(response.data.author)

  }

  return (
    <div className="App" >

      <button onClick={showme}>Show quote</button>
      <p>{quote}</p>
      <p>{author}</p>
     

        {/* It is state lifting where we are lifting the state up to the parent component and passing it down to the child component as props. */}


       {/* <Counter increment={increment} text="click me">
         <p>{count}</p>
       </Counter> */}

      {/* <Cards name={name} setName={setName} />
       <p>Im Parent:{name}</p>
       <Cards name={name} setName={setName} /> */}

      {/* <Showcontent id='child1' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent><br/>
      
      <Showcontent id='child2' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent>

      <Showcontent id='child3' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent> */}

      {/* <button onClick={function(){setCount(count+1)}}>Click me</button>
      {count} */}

        {/* <TimerComponent/> */}

        {/* <RandomQuote/> */}

        {/* <Form/> */}

        

        {/* <themecontext.Provider value={{theme, setTheme}}>
          <div id="container" style={{backgroundColor:theme==='beige'?'beige':'black'}}>
            <ChildA/>
          </div>
        </themecontext.Provider> */}

        {/* <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>

            <Route path='/students' element={<Students/>}/>
            <Route path='/students/:id/:name?' element={<StudentDetail/>}/>

            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes> */}













      {/* <Cards name="Numan Asghar" desc="Web Developer" img={nomi} style={{"border-radius": "10px"}}/>
        Cards name="John Doe" desc="Software Engineer" img={nomi} style={{"border-radius": "10px"}}/>
        <Cards name="Jane Smith" desc="Product Manager" img={nomi} style={{"border-radius": "10px"}}/>
        <Counter /> */}
    </div>
  )
}

export default App
export {themecontext}
