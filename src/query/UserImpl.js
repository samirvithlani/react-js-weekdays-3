import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useFetchData } from './UserService'

export const UserImpl = () => {
    const res = useFetchData()
    
    useEffect(() => {
      
        console.log("loading...",res.isLoading);
        console.log("data ->",res.data);
        console.log("error--->",res.error);
        console.log("status--->",res    .status);
      
    }, [res.isLoading])
    const getData = ()=>{

        res.refetch();
    }
    
  return (
    <div>
            <button onClick={()=>getData()}>refetch</button>
            {
                res.isLoading ? <CircularProgress/>: <h1>data</h1>
            }

    </div>
  )
}
