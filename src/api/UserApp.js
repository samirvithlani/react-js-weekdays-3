import axios from 'axios'
import React from 'react'

export const UserApp = () => {
    const getUser = async()=>{
        const res  = await axios.get('http://localhost:3001/user/user',{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJzYW1pcjEiLCJlbWFpbCI6InNhbWlyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNhbWlyQDEyMyIsImFnZSI6MjMsImlzTWFycmllZCI6ZmFsc2UsIl9pZCI6IjY0MTVjZTBhNTllZDJiMjY1Y2U4ZmYzNiIsIl9fdiI6MH0sImlhdCI6MTY3OTE1MDYwMiwiZXhwIjoxNjc5MTU0MjAyfQ.EqIMmn6miUIqCTxQmcMuA_l4S8qC12wdhgV1bgsQ6IE"
            }
        })
        console.log(res)
    }
    
  return (
    <div>
        <button onClick={getUser}>Get User</button>
    </div>
  )
}

