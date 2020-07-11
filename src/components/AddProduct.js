import React from 'react'
import ProductForm from './ProductForm'

const AddProduct = ({id, sendProduct}) => (
  <ProductForm id={id} sendProduct={sendProduct} />
)

export default AddProduct
