import { connect } from 'react-redux'
import { deleteProduct } from '../actions'
import ProductsList from '../components/ProductsList'
import { getProductsIfNeeded } from '../actions'

const mapStateToProps = state => ({
  products: state.products.items
})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProduct(id)),
  getProductsIfNeeded: () => dispatch(getProductsIfNeeded())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
