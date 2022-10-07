import React, { useState } from 'react'
import { AddFood } from './AddFood'
import { AppContext } from './Context'
import { ViewFood } from './ViewFood'

export const Foods = () => {
//api
const [foods, setfoods] = useState([
    {
        id: 1,
        name: "Pizza",
        price: 15,
    },
    {
        id: 2,
        name: "Burger",
        price: 10,
    },{
        id: 3,
        name: "Pasta",
        price: 12,
    }
])

const dispacthData = (action,payload) =>{

    switch(action){
        case "ADD_FOOD":
            setfoods([...foods,payload])
            return
        case "DELETE_FOOD":
            
            setfoods(foods.filter((food)=>food!== payload))
            return;
           default:
            return 

    }


}

  return (
    <div>
            <AppContext.Provider value={{foods,dispacthData}}>
                <AddFood/>
                <ViewFood/>
            </AppContext.Provider>
    </div>
  )
}


