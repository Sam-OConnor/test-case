import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({products, deleteProduct}) => (
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
          <Link to={"/edit/" + product.id} className="product-controll">&#9998;</Link>
          <a href="/"
             className="product-controll"
             onClick={e => {
               e.preventDefault()
               deleteProduct(product.id)
           }}>&#10005;</a>
        </div>
      )}
    </div>
  </div>
)

export default ProductsList
