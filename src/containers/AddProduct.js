import { connect } from 'react-redux'
import { addProduct } from '../actions'
import AddProduct from '../components/AddProduct'

const mapDispatchToProps = dispatch => ({
  saveProduct: (id, prodData) => dispatch(addProduct(id, prodData))
})

export default connect(
  null,
  mapDispatchToProps
)(AddProduct)
