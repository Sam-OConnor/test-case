import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'

const EditProduct = ({productIndex, product, saveProduct}) => {
  const [isProductLoaded, setIsProductLoaded] = useState(false)

  useEffect(() => {
    if (product) {
      setIsProductLoaded(true)
    }
  }, [product])

  return (
    <div>
      {isProductLoaded &&
        <ProductForm productIndex={productIndex} product={product} saveProduct={saveProduct} />
      }
    </div>
  )
}

export default EditProduct
