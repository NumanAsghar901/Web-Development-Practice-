import react from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{display:'flex', gap:'20px', backgroundColor:'blue', color:'white', padding:'10px', fontWeight:'bold'}}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/students'>Students</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/login'>Login</NavLink>
            
            
        </nav>
    )
}

export default Navbar