import { useNavigate } from "react-router-dom";
import React from 'react'

const Login = () => {
    const navigate=useNavigate();

    function handle(){
        localStorage.setItem('auth', 'true');

        navigate('/dashboard');
    }

    

  return (
    <div>
        <h2>Login Page</h2>
        <button onClick={handle}>Login</button>
      
    </div>
  )
}

export default Login
