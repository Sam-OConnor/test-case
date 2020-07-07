import React from 'react'
import { connect } from 'react-redux'
import { addProd } from '../actions'

const AddProd = ({ newProdId, dispatch }) => {
  let name,
      price

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addProd(newProdId, {name: name.value, price: price.value}))
        name.value = ''
        price.value = ''
      }}>
        <input ref={node => name = node} placeholder='Name'/>
        <input ref={node => price = node} placeholder='Price'/>
        <button type="submit">
          Add product
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  newProdId: state.products.length
})

export default connect(
  mapStateToProps
)(AddProd)
