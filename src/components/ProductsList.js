import React from 'react'
import { Link } from 'react-router-dom'

const getDaysToDiscountExpire = date => {
  const currentDate = new Date().setUTCHours(0,0,0,0).valueOf()
  const discountEndsDate = new Date(date).setUTCHours(0,0,0,0).valueOf()

  const diffInDays = (discountEndsDate - currentDate) / (1000 * 3600 * 24)

  return diffInDays
}

const ProductsList = ({products, deleteProduct, getProductsIfNeeded}) => (
  <div className="product-list-wrapper">
    <div className="section-heading">
      <h2>product list</h2>
      <Link to="/add" className="add-product-link">New</Link>
    </div>
    <div className="product-list">
      {products.map(product =>
        <div className="product" key={product.id}>
          <div className="product-image-wrapper">
            <img src={product.prodData.image} alt={product.prodData.name}/>
          </div>
          <span className="product-name">{product.prodData.name}</span>
          <span className="product-descr">{product.prodData.descr}</span>
          <span className="product-price">${product.prodData.price}</span>
          {product.prodData.discount > 0 &&
            <div>
              <span className="product-price">
                ${(product.prodData.price - (product.prodData.price / 100) * product.prodData.discount).toFixed(2)}
              </span>
              <span className="product-discount">{product.prodData.discount}%</span>
              <span className="product-discount-ends">
                days to discount expiry: {getDaysToDiscountExpire(product.prodData.discountEnds)}
              </span>
            </div>
          }
          <Link to={"/edit/" + product.id} className="product-control">&#9998;</Link>
          <a href="/"
             className="product-control"
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
