import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import errors from './errors'

export default combineReducers({
  auth,
  products,
  errors
})
