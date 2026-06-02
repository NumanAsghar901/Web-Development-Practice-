import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetail = () => {
    const {id, name} = useParams();
  return (
    <div>
        
        <h1>Student Detail Page</h1>
        <p>Details of student with id: {id} and name: {name}</p>
      
    </div>
  )
}

export default StudentDetail
