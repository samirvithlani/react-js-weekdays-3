import React, { useState } from 'react'
import { useEffect } from 'react';

export const Storage = () => {

    var userName = "jay";
    var email = "jay@gmail.com"
    const [data, setdata] = useState('')
    var users = {
        name: "jay",
        age: "20",
    }
    
    const storeData = () =>{  
        localStorage.setItem("name",userName)
        localStorage.setItem("user",JSON.stringify(users))
        window.sessionStorage.setItem("email",email)
        alert("Data stored....")
    }
    
    
  return (
    <div>
        
        <button onClick={storeData}>Store Data</button>
        
    </div>
  )
}
