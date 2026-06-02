import React from 'react'
import { Link } from 'react-router-dom'
const Students = () => {


    const students=[
        {id:1, name:'John Doe', age:20},
        {id:2, name:'Jane Smith', age:22},
        {id:3, name:'Michael Johnson', age:19},
        {id:4, name:'Emily Davis', age:21},
        {id:5, name:'David Wilson', age:23}
    ]
  return (
    <div>
        <h2>Students List</h2>
        
        {students.map(function(student){
            return(
            <p key={student.id}> <Link to={`/students/${student.id}/${student.name}`}>{student.name}</Link></p>)
        })}

    </div>
  )
}

export default Students
