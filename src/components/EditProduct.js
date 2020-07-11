import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm'

const EditProduct = ({id, productIndex, product, sendProduct}) => {
  const [isProductLoaded, setIsProductLoaded] = useState(false)

  useEffect(() => {
    if (product) {
      setIsProductLoaded(true)
    }
  }, [product])

  return (
    <div>
      {isProductLoaded &&
        <ProductForm id={id} productIndex={productIndex} product={product} sendProduct={sendProduct} />
      }
    </div>
  )
}

export default EditProduct
