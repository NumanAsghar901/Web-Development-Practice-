
import React, { useState } from 'react';
function Form() {
  const [inputs, setInputs] = useState({});

  function handleSubmit(e){
    e.preventDefault();
  }
 function handleChange(e) {
    name=e.target.name;
    value=e.target.value;
    setInputs(values => ({...values, [name]:value}));

 }
  return(
    <>
    <h3>University Admission Form</h3>
    <form onSubmit={handleSubmit}>
      <label style={{margin: '0px 0px 20px 0px'}}>First Name: 
        <input style={{margin: '0px 0px 20px 10px', width: '400px'}}
        type="text" 
       
        value={inputs.firstname} 
        onChange={handleChange} />
      </label>
      <br />
      <label style={{margin: '0px 0px 20px 0px'}}>Last Name: 
        <input style={{margin: '0px 0px 20px 10px', width: '400px'}} 
        type="text" 
        
        value={inputs.lastName} 
        onChange={handleChange} />
      </label>
      <br />
      <input  style={{width: '500px'}} type="Submit"/>

      <input type="radio" name="gender" value={inputs.gender} checked={inputs.gender === 'Male'} onChange={handleChange} /> Option 1
      <input type="radio" name="gender" value="Female" checked={inputs.gender === 'Female'} onChange={handleChange} /> Option 2
      
    </form>
    
    </>
  )
}
export default Form