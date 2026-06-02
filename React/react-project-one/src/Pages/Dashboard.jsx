import React from 'react'

const Dashboard = () => {
    const isAuth=localStorage.getItem('auth');
  return (
    <div>
      <h2>Dashboard</h2>
      {isAuth ? <p>Welcome to the dashboard!</p> : <p>Please login to access the dashboard.</p>}
      
    </div>
  )
}

export default Dashboard
