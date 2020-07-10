import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
