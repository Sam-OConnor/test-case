import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'

const mapStateToProps = state => ({
  products: state.products
})

export default connect(
  mapStateToProps
)(ProductsList)
