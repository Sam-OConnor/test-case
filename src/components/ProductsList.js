import React from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from '../containers/ErrorMessage'

const getDaysToDiscountExpire = date => {
  const currentDate = new Date().setUTCHours(0,0,0,0).valueOf()
  const discountEndsDate = new Date(date).setUTCHours(0,0,0,0).valueOf()

  const diffInDays = (discountEndsDate - currentDate) / (1000 * 3600 * 24)

  return diffInDays
}

const ProductsList = ({products, deleteProduct, isLoggedIn, getProductsIfNeeded, logout}) => (
  <div className="product-list-wrapper">
    <div className="section-heading">
      <h2>product list</h2>
      <div className="heading-links-wrapper">
        {isLoggedIn ?
          <React.Fragment>
            <Link to="/add" className="header-link">New</Link>
            <a
              href="/"
              className="header-link"
              onClick={e => {
                e.preventDefault()
                logout()
            }}>
              Log out
            </a>
          </React.Fragment> :
          <Link to="/login" className="header-link">Login</Link>
        }
      </div>
    </div>

    <div className="product-list">
      {products.map(product =>
        <div className="product" key={product.id}>
          <div className="product-top">
            <div className="product-image-wrapper">
              <img src={product.prodData.image} alt={product.prodData.name}/>
            </div>
            <span className="product-name">{product.prodData.name}</span>
            <span className="product-descr">{product.prodData.descr}</span>

            {product.prodData.discount > 0 && getDaysToDiscountExpire(product.prodData.discountEnds) > 0  ?
              <React.Fragment>
                <span className="product-price has-discount">${product.prodData.price}</span>
                <span className="product-discount-price">
                  ${(product.prodData.price - (product.prodData.price / 100) * product.prodData.discount).toFixed(2)}
                </span>
                <span className="product-discount">-{product.prodData.discount}%</span>
                <span className="product-discount-ends">
                  days to discount expiry: {getDaysToDiscountExpire(product.prodData.discountEnds)}
                </span>
              </React.Fragment> :
              <span className="product-price">${product.prodData.price}</span>
            }
          </div>

          <div className="product-bottom">
            {isLoggedIn &&
              <div className="product-controls">
                <Link to={"/edit/" + product.id} className="product-control">&#9998;</Link>
                <a href="/"
                className="product-control"
                onClick={e => {
                  e.preventDefault()
                  deleteProduct(product.id)
                }}>&#10005;</a>
              </div>
            }
          </div>
        </div>
      )}
    </div>
    <ErrorMessage></ErrorMessage>
  </div>
)

export default ProductsList
