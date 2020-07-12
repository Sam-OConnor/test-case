import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from '../firebase'
import { getProductsIfNeeded, changeLoginStatus } from '../actions'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductsList'
import AddProduct from '../containers/AddProduct'
import EditProduct from '../containers/EditProduct'
import './app.scss'

const App = ({getProductsIfNeeded, changeLoginStatus}) => {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      changeLoginStatus(true)
    } else {
      changeLoginStatus(false)
    }
  });

  useEffect(() => {
    getProductsIfNeeded()
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>

        <Route exact path="/add">
          <AddProduct />
        </Route>

        <Route exact path="/edit/:id" component={EditProduct} />

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = dispatch => ({
  getProductsIfNeeded: () => dispatch(getProductsIfNeeded()),
  changeLoginStatus: isLoggedIn => dispatch(changeLoginStatus(isLoggedIn))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
