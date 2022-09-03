import axios from 'axios'
import React from 'react'

export const LoginDoctor = () => {

    const login = async () =>{

        //form...
        axios.post("http://localhost:8080/logindoctor2",null,{
            params:{
                dname:"samir",
                demail:"samir@gmail.com"
            }
        }).then(res=>{
                console.log(res.data)
                localStorage.setItem("doctor",JSON.stringify(res.data))
                localStorage.setItem("doctorid",res.data.dId)
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <div>
        LOGIN component
            <button onClick={login}>Login</button>
    </div>
  )
}
