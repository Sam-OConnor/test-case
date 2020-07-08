import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../components/Login'
import ProductsList from '../containers/ProductsList'
import AddProduct from '../containers/AddProduct'
import EditProduct from '../containers/EditProduct'
import './app.scss'

const App = props => {

  let homeComponent = props.isLoggedIn ? <ProductsList /> : <Login />

  return  (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {homeComponent}
          </Route>

          <Route exact path="/add">
            <AddProduct />
          </Route>

          <Route exact path="/edit/:id" component={EditProduct} />
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(
  mapStateToProps
)(App)
