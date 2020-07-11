import { connect } from 'react-redux'
import { findUser } from '../actions'
import Login from '../components/Login'

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  findUser: (login, password) => dispatch(findUser(login, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
