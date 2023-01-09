import React, { useContext } from 'react'
import { AppContext } from '../contextdemo/context';

export const ContactUs = () => {
  const {student,setst}= useContext(AppContext);
  console.log(student);
  
  return (
    <div>ContactUs</div>
  )
}
