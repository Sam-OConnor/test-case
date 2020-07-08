import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AddProduct = ({newProdId, saveProduct}) => {
  const [redirect, setRedirect] = useState(false)
  const [name, setName] = useState('')
  const [descr, setDescr] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [discountEnds, setDiscountEnds] = useState('')

  if(redirect)
    return <Redirect to="/"/>

  return (
    <form onSubmit={e => {
      e.preventDefault()
      saveProduct(newProdId, {
        name: name,
        descr: descr,
        price: price,
        discount: discount,
        discountEnds: discountEnds
      })
      setRedirect(true)
    }}>
      <input type="text" name="name" onChange={e => setName(e.target.value)} />
      <textarea name="descr" onChange={e => setDescr(e.target.value)}></textarea>
      <input name="price" type="number" onChange={e => setPrice(e.target.value)} />
      <input name="discount" type="number" onChange={e => setDiscount(e.target.value)} />
      <input name="discountEnds" type="date" onChange={e => setDiscountEnds(e.target.value)} />
      <button type="submit">
        Save
      </button>
    </form>
  )
}

const mapStateToProps = state => {
  let id

  if(state.products.length > 0)
    id = state.products[state.products.length - 1].id + 1
  else
    id = 1

  return ({
    newProdId: id
  })
}

export default connect(
  mapStateToProps
)(AddProduct)
