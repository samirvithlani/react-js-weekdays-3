import React from 'react'

export const Header = (props) => {
    const style = {
        backgroundColor: '#333',
        color: '#fff',
    }
  return (
    <div style={style}>
        <h1>HEADER</h1>
        <h3>{props.uName}</h3>
        <h4>{props.email}</h4>
    </div>
  )
}
