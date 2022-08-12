import React from 'react'
import {useParams} from 'react-router-dom'

export const ProductDetail = () => {
    var id = useParams().id;
  return (
    <h1>
        Product DETAIL {id}
    </h1>
  )
}
