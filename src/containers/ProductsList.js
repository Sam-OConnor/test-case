import { connect } from 'react-redux'
import { deleteProduct, logout } from '../actions'
import ProductsList from '../components/ProductsList'

const mapStateToProps = state => ({
  products: state.products.items,
  isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProduct(id)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
