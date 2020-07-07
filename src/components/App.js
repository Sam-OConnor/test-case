import React from 'react'
import { Route } from 'react-router-dom';
import ProductsList from '../containers/ProductsList'
import AddProd from '../containers/AddProduct'

const App = () => (
  <div>
    <AddProd />
    <ProductsList />
  </div>
)

export default App
