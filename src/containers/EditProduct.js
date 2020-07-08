import { connect } from 'react-redux'
import { editProduct } from '../actions'
import EditProduct from '../components/EditProduct'

const mapStateToProps = (state, ownProps) => {
  const productIndex = state.products.findIndex(x => x.id === +ownProps.match.params.id);

  return {
    productIndex: productIndex,
    product: state.products[productIndex].prodData
  }
}

const mapDispatchToProps = dispatch => ({
  saveProduct: (id, prodData) => dispatch(editProduct(id, prodData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
