import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from './Context'

export const AddFood = () => {
    const {dispacthData} = useContext(AppContext)
    var {register,handleSubmit,errors} = useForm()

    const submit  = (data) =>{

        dispacthData("ADD_FOOD",data)
    }
  return (
    <div>
            <form onSubmit={handleSubmit(submit)}>
                ID<input type="text" name="name" {...register("id")}/>
                Name<input type="text" name="name" {...register("name")}/>
                Price<input type="text" name="name" {...register("price")}/>
                       <input type="submit" value = "ADD FOOD"></input> 
            </form>
                

    </div>
  )
}
