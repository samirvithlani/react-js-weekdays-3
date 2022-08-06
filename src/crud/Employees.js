import React, { useState } from "react";
import { EmployeeList } from "./EmployeeList";
import { EmployeeRegistration } from "./EmployeeRegistration";

export const Employees = () => {
  const deleteEmployee = (emp) => {
    employees = employees.filter((e) => e.id !== emp.id);
    console.log(employees);
    setemployees(employees);
  };

  const addEmployee=(emp)=>{

    console.log(emp)
    //spread operator...
    //setemployees([...employees,emp])
    //employees = employees.push(emp)
    employees = [...employees,emp]
    setemployees(employees)
    
  }

  //const [emmployees, setemmployees] = useState(employees)
  
  var [employees, setemployees] = useState([]);

  return (
    <div>
      <EmployeeRegistration addEmployee = {addEmployee}/>
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
};
