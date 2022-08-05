import React from 'react'

export const EmployeeList = (props) => {
  return (
    <div>
      <h1>Employee List</h1>
      
      {
          props.employees.map(employee=>{
            return(
              
            <tr>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.isActive ? 'Active' : 'Inactive'}</td>
            </tr>
          )})

      }
    </div>
  )
}
