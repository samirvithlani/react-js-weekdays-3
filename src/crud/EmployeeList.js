import React from "react";

export const EmployeeList = (props) => {
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => {
            return (
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.salary}</td>
                <td>{employee.isActive ? "Active" : "Not Active"}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{props.deleteEmployee(employee)}}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
