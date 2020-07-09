import React from 'react'
import ProductForm from './ProductForm'

const EditProduct = ({productIndex, product, saveProduct}) => (
    <ProductForm productIndex={productIndex} product={product} saveProduct={saveProduct} />
  )
}

export default EditProduct
