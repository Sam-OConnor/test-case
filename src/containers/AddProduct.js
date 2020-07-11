import { connect } from 'react-redux'
import { sendProduct } from '../actions'
import AddProduct from '../components/AddProduct'

const mapStateToProps = state => {
  const products = state.products.items.reverse()
  let id

  if(products.length > 0)
    id = products[products.length - 1].id + 1
  else
    id = 1

  return ({
    id: id,
    isLoading: state.products.isLoading,
    isLoggedIn: state.auth.isLoggedIn
  })
}

const mapDispatchToProps = dispatch => ({
  sendProduct: (id, prodData) => dispatch(sendProduct(id, prodData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)
