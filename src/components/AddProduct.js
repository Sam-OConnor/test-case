import React from 'react'
import { connect } from 'react-redux'
import ProductForm from './ProductForm'

const AddProduct = ({productIndex, saveProduct}) => (
  <ProductForm productIndex={productIndex} saveProduct={saveProduct} />
)

const mapStateToProps = state => {
  let id

  if(state.products.length > 0)
    id = state.products[state.products.length - 1].id + 1
  else
    id = 1

  return ({
    productIndex: id
  })
}

export default connect(
  mapStateToProps
)(AddProduct)
