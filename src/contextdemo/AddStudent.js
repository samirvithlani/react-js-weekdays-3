import React, { useContext } from 'react'

import {useForm} from 'react-hook-form'
import { AppContext } from './context'

export const AddStudent = () => {
    var {register,handleSubmit} = useForm()
    const submit = (data)=>{
        //console.log(data)
        dispacthStudentEvent('ADD_STUDENT',data)
    }
    const{dispacthStudentEvent} = useContext(AppContext)
  return (
    <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" name='name' {...register("name")}></input>
                <input type="text" name='age'{...register("age")}></input>
                <input type="submit" value="submit"></input>
            </form>

    </div>
  )
}
