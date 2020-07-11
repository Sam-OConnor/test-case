import { connect } from 'react-redux'
import { sendProduct } from '../actions'
import EditProduct from '../components/EditProduct'

const mapStateToProps = (state, ownProps) => {
  const productIndex = state.products.items.findIndex(product => product.id === +ownProps.match.params.id);

  return {
    id: +ownProps.match.params.id,
    productIndex: productIndex,
    product: state.products.items[productIndex] ? state.products.items[productIndex].prodData : ''
  }
}

const mapDispatchToProps = dispatch => ({
  sendProduct: (id, prodData, productIndex) => dispatch(sendProduct(id, prodData, productIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
