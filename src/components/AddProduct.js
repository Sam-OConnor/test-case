// import React from 'react'
// import { connect } from 'react-redux'
//
// const AddProduct = props => {
//
//   console.log(props);
//
//   let prodData = {};
//
//   const onFormSubmit = e => {
//     e.preventDefault()
//     const newProdData = new FormData(e.target)
//     prodData = {
//       name: newProdData.getAll('name'),
//       descr: newProdData.getAll('descr'),
//       price: newProdData.getAll('price'),
//       discount: newProdData.getAll('discount'),
//       discountEnds: newProdData.getAll('discountEnds')
//     }
//
//     props.saveProduct(props.newProdId, prodData)
//   }
//
//   return (
//     <form onSubmit={e => onFormSubmit(e)}>
//       <input readOnly type="text" name="name" value="Mac mini 2012"/>
//       <textarea readOnly name="descr" value="asdasfasf"></textarea>
//       <input readOnly name="price" type="number" value="300"/>
//       <input readOnly name="discount" type="number" value="50"/>
//       <input name="discountEnds" type="date"/>
//       <button type="submit">
//         Save
//       </button>
//     </form>
//   )
// }
//
// const mapStateToProps = state => ({
//   newProdId: state.products.length
// })
//
// export default connect(
//   mapStateToProps
// )(AddProduct)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AddProduct = props => {
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
      props.saveProduct(props.newProdId, {
        name: name,
        descr: descr,
        price: price,
        discount: discount,
        discountEnds: discountEnds
      })
      setRedirect(true)
    }}>
      <input type="text" name="name" onChange={e => setName(e.target.value)}/>
      <textarea name="descr" onChange={e => setDescr(e.target.value)}></textarea>
      <input name="price" type="number" onChange={e => setPrice(e.target.value)}/>
      <input name="discount" type="number" onChange={e => setDiscount(e.target.value)}/>
      <input name="discountEnds" type="date" onChange={e => setDiscountEnds(e.target.value)}/>
      <button type="submit">
        Save
      </button>
    </form>
  )
}

const mapStateToProps = state => ({
  newProdId: state.products.length
})

export default connect(
  mapStateToProps
)(AddProduct)
