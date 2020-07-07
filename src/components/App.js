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
          <Route path="/add">
            <AddProduct />
          </Route>
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
