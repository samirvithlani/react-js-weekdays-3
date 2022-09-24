import { Slider } from '@mui/material'
import React, { useState } from 'react'

export const MuiSlider = () => {

    
    const [users, setusers] = useState([
        {
            name: "harsh",
            age: 20,
        },
        {
            name: "raj",
            age: 21,
        },{
            name: "ajay",
            age: 26,
        }
    ])
    var changeHandler = (e,value) => {

        console.log(value)
        //value > age ? setusers(users.filter((user) => user.age > age)) : setusers(users.filter((user) => user.age < age))
        //setusers(users.filter((user) => user.age >= value[0] && user.age <= value[1]))
        
            // setusers(users.filter((user) => {
            //         if(user.age> value){
            //         user.age > value
            //         }
            //         else{
            //             user.age < value
            //         }
            // }))
            

            console.log("a--",users.filter((user)=> {
                
                return user.age > value ? user.age > value : user}))

            setusers(users.filter((user)=> {
                
                return user.age > value ? user.age > value : user.age < value}))
        
        
        
    }
  return (
    <div>
        <Slider
        onChange={(e, value) => changeHandler(e, value)}
        >

        </Slider>
        <div>
            {
                users.map((user) => (
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.age}</h1>
                    </div>
                ))
                
            }
        </div>
    </div>
  )
}
