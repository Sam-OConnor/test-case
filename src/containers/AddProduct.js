import { connect } from 'react-redux'
import { sendProduct } from '../actions'
import AddProduct from '../components/AddProduct'

const mapStateToProps = state => {
  const products = state.products.reverse()
  let id

  if(products.length > 0)
    id = products[products.length - 1].id + 1
  else
    id = 1

  return ({
    productIndex: id
  })
}

const mapDispatchToProps = dispatch => ({
  sendProduct: (id, prodData) => dispatch(sendProduct(id, prodData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)
