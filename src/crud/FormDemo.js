import React, { useState } from "react";

export const FormDemo = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')

    const firstNameHandler = (e)=>{

        //console.log(e)
        //console.log(e.target.value)
        setfirstName(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        alert(`${firstName} ${lastName}`)
    }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" onChange={(e)=>{firstNameHandler(e)}} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" onChange={(e)=>{setlastName(e.target.value)}} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
