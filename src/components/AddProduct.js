import React from 'react'
import ProductForm from './ProductForm'

const AddProduct = ({productIndex, sendProduct}) => (
  <ProductForm productIndex={productIndex} sendProduct={sendProduct} />
)

export default AddProduct
