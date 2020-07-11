import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { getProductsIfNeeded } from '../actions'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductsList'
import AddProduct from '../containers/AddProduct'
import EditProduct from '../containers/EditProduct'
import './app.scss'

const App = ({getProductsIfNeeded}) => {

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
  getProductsIfNeeded: () => dispatch(getProductsIfNeeded())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
