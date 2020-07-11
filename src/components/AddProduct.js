import React from 'react'
import { Redirect } from "react-router-dom";
import ProductForm from './ProductForm'

const AddProduct = ({id, isLoading, isLoggedIn, sendProduct}) => {
  if(isLoggedIn)
    return (
      <ProductForm id={id} isLoading={isLoading} isLoggedIn={isLoggedIn} sendProduct={sendProduct} />
    )
  else
    return <Redirect to='/login'/>

}

export default AddProduct
