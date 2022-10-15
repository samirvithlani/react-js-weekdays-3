import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

export const Fileupload = () => {
    const [file, setfile] = useState()
    const {register, handleSubmit} = useForm()

    const submit = (data)=>{
        console.log(data)
        var data1 = {
            file: data.file[0],
            name: data.name
        }

        axios.post("http://localhost:8080/upload",data1).then(res=>{
            console.log(res);
        })
    }
    const fileHabdler = (e)=>{
        console.log("file",e.target.files);
    }
    const fileupload = (data)=>{
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)} >
            <label>user name</label>
            <input type="text" name="username" {...register("name")}/>
            
            <input type="file"
            onChange={(e)=>{setfile(e.target.files[0])}}
            ></input>
            <input type="file"
            onChange={(e)=>{fileHabdler(e)}}
            multiple
            ></input>
            use form
            <input type="file" 
            {...register("file")}
            >
            </input>
            <input type="submit"></input>
        </form>

    </div>
  )
}
