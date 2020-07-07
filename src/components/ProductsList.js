import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({products}) => (
  <div className="product-list-wrapper">
    <div className="section-heading">
      <h2>product list</h2>
      <Link to="/add" className="add-product-link">New</Link>
    </div>
    <div className="product-list">
      {products.map(product =>
        <div className="product" key={product.id}>
          <span className="product-name">{product.prodData.name}</span>
          <span className="product-descr">{product.prodData.descr}</span>
          <span className="product-price">${product.prodData.price}</span>
          <span className="product-discount">-${product.prodData.discount}</span>
          <span className="product-discount-ends">ends in {product.prodData.discountEnds} days</span>
          <a href="/" className="product-controll">&#9998;</a>
          <a href="/" className="product-controll">&#10005;</a>
        </div>
      )}
    </div>
  </div>
)

export default ProductsList
