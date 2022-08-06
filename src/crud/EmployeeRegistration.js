import React, { useState } from "react";

export const EmployeeRegistration = (props) => {
    const [id, setid] = useState('')
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [salary, setsalary] = useState('')
    const [isActive, setisActive] = useState('')

    const submit = (e)=>{
        e.preventDefault()
        var emp ={
            id:id,
            name:name,
            age:age,
            salary:salary,
            isActive:isActive
        }
        props.addEmployee(emp)
        
                
    }
    

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="id">Id</label>
          <input
            type="text"
            onChange={(e) => {
             setid(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input
            type="text"
            onChange={(e) => {
              setage(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="Salary">Salary</label>
          <input
            type="text"
            onChange={(e) => {
              setsalary(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="Status">Status</label>
          <input
            type="text"
            onChange={(e) => {
              setisActive(e.target.value)
            }}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
