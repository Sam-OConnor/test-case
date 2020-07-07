import React from 'react'

const ProductsList = ({products}) => (
  <ul>
    {products.map(product =>
      // <li key={product.id}>
      //   name: {product.prodData.name}
      //   price: {product.prodData.price}
      // </li>

      <li key={product.id}>
        name: {product.prodData.name} | price: {product.prodData.price}
      </li>
    )}
  </ul>
)

export default ProductsList
