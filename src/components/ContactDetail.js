import React from 'react'
import { useParams } from 'react-router-dom'

export const ContactDetail = () => {
    var id = useParams().id;
    var name = useParams().name;
  return (
    <div>
        <h1>contact detail.... {id}, {name}</h1>
    </div>
  )
}
