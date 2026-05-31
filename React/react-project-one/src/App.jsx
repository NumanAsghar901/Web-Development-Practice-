
import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import nomi from './assets/nomi.jpeg'
import Counter from './Components/Counter'
import { useState, useEffect } from 'react'
import Showcontent from './Components/Showcontent'

function App() {
  // const [count, setCount]=useState(0);
  // function increment(){
  //   setCount(count+1);
  // }

  const [name, setName] = useState('')

  const [show, setShow] = useState('none')

  return (
    <div className="App" >
     

        {/* It is state lifting where we are lifting the state up to the parent component and passing it down to the child component as props. */}


       {/* <Counter increment={increment} text="click me">
         <p>{count}</p>
       </Counter> */}

      {/* <Cards name={name} setName={setName} />
       <p>Im Parent:{name}</p>
       <Cards name={name} setName={setName} /> */}

      <Showcontent id='child1' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent><br/>
      
      <Showcontent id='child2' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent>

      <Showcontent id='child3' show={show} setShow={setShow}>
        <p>Click the button to toggle the content from child {show}</p>
      </Showcontent>









      {/* <Cards name="Numan Asghar" desc="Web Developer" img={nomi} style={{"border-radius": "10px"}}/>
        Cards name="John Doe" desc="Software Engineer" img={nomi} style={{"border-radius": "10px"}}/>
        <Cards name="Jane Smith" desc="Product Manager" img={nomi} style={{"border-radius": "10px"}}/>
        <Counter /> */}
    </div>
  )
}

export default App
