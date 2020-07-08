import { connect } from 'react-redux'
import { deleteProduct } from '../actions'
import ProductsList from '../components/ProductsList'

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProduct(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
