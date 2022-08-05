import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Content = ({student,email}) => {

  var employees =[
    {
      name: 'John',
      age: '30',
      isActive:true
    },
    {
      name: 'jay',
      age: '45',
      isActive:false
    },
    {
      name: 'priya',
      age: '25',
      isActive:true
    },
  ]

    var style = {
        backgroundColor: '#333',
        color: '#fff',
        margin:'50px',
        padding:'200px',
        height:'400px'
    }
  return (
    <div style={style}>
        <h1>Content</h1>
        <h2>{student.name}</h2>
        <h2>{student.age}</h2>
        <h5>{email}</h5>


        <EmployeeList employees = {employees}/>
    </div>
  )
}
