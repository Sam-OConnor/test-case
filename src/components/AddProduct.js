import React from 'react'
import ProductForm from './ProductForm'

const AddProduct = ({id, isLoading, sendProduct}) => (
  <ProductForm id={id} isLoading={isLoading} sendProduct={sendProduct} />
)

export default AddProduct
