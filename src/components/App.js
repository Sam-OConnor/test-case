import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { getProductsIfNeeded } from '../actions'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductsList'
import AddProduct from '../containers/AddProduct'
import EditProduct from '../containers/EditProduct'
import './app.scss'

const App = ({isLoggedIn, getProductsIfNeeded}) => {
  // let homeComponent = isLoggedIn ? <ProductsList /> : <Login />

  useEffect(() => {
    getProductsIfNeeded()
  })

  return  (
    <div>
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

        {!isLoggedIn &&
          <Redirect to="/login"/>
        }

      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  getProductsIfNeeded: () => dispatch(getProductsIfNeeded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
