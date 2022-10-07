import React, { useContext } from 'react'
import { AppContext } from './Context'

export const ViewFood = () => {
var {foods,dispacthData} = useContext(AppContext)

  return (
    <div>
        {
            foods.map((food)=>(
                <div>
                    <h1>{food.name}</h1>
                    <h1>{food.price}</h1>
                    <button onClick={()=>{dispacthData("DELETE_FOOD",food)}}>delete</button>
                </div>
            ))
        }
    </div>
  )
}
