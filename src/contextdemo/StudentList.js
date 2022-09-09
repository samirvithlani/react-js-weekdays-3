import React, { useContext } from 'react'
import { AppContext } from './context'

export const StudentList = () => {

    const {student, dispacthStudentEvent } = useContext(AppContext)
  return (
    <div>
        {
            student.map(s=>{
                return(
                    <ul>
                        <li>{s.name}</li>
                        <li>{s.age}</li>
                        <li>
                            <button onClick={()=>{dispacthStudentEvent('DELETE_STUDENT',s)}}>Delete</button>
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}
