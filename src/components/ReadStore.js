import React, { useState } from 'react'

export const ReadStore = () => {

    const [data, setdata] = useState('')
    const [data1, setdata1] = useState('')
    
    const getData = () =>{
        setdata(localStorage.getItem("name"))
        setdata1(sessionStorage.getItem("email"))


    }
    const cleareData = () =>{
        localStorage.clear()
        setdata('')
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={getData}>Get Data</button>
        <button onClick={cleareData}>Clear Data</button>

    </div>
  )
}
