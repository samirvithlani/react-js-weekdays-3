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
        
  console.log("updated at",res.dataUpdatedAt);
  console.log("error",res.error)
  console.log("error updated at",res.errorUpdatedAt)
  console.log("",res.failureCount)
  console.log("",res.isError)
  console.log("",res.isFetched)
  console.log("",res.isFetchedAfterMount)
  console.log("is fetching",res.isFetching)
  console.log("",res.isPaused)
  console.log("",res.isLoading)
  console.log("",res.isLoadingError)
  console.log("",res.isPlaceholderData)
  console.log("",res.isPreviousData)
  console.log("",res.isRefetchError)
  console.log("",res.isRefetching)
  console.log("",res.isStale)
  console.log("",res.isSuccess)
  console.log("",res.refetch)
  console.log("",res.remove)
  console.log("",res.status)
  console.log("",res.fetchStatus)
      
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
