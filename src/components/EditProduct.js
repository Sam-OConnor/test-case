import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import ProductForm from './ProductForm'

const EditProduct = ({id, productIndex, product, isLoading, isLoggedIn, sendProduct}) => {
  const [isProductLoaded, setIsProductLoaded] = useState(false)

  useEffect(() => {
    if (product) {
      setIsProductLoaded(true)
    }
  }, [product])

  if (isLoggedIn)
    return (
      <div>
        {isProductLoaded &&
          <ProductForm id={id} productIndex={productIndex} product={product} isLoading={isLoading} sendProduct={sendProduct} />
        }
      </div>
    )
  else
    return <Redirect to='/login'/>
}

export default EditProduct
