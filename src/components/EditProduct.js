import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ProductForm from './ProductForm'

const EditProduct = ({productIndex, product, saveProduct}) => {
  // const [redirect, setRedirect] = useState(false)
  // const [name, setName] = useState(product.name)
  // const [descr, setDescr] = useState(product.descr)
  // const [price, setPrice] = useState(product.price)
  // const [discount, setDiscount] = useState(product.discount)
  // const [discountEnds, setDiscountEnds] = useState(product.discountEnds)
  //
  // if(redirect)
  //   return <Redirect to="/"/>

  return (
    // <form onSubmit={e => {
    //   e.preventDefault()
    //   saveProduct(productIndex, {
    //     name: name,
    //     descr: descr,
    //     price: price,
    //     discount: discount,
    //     discountEnds: discountEnds
    //   })
    //   setRedirect(true)
    // }}>
    //   <input type="text" defaultValue={product.name} name="name" onChange={e => setName(e.target.value)} />
    //   <textarea name="descr" defaultValue={product.descr} onChange={e => setDescr(e.target.value)}></textarea>
    //   <input name="price" defaultValue={product.price} type="number" onChange={e => setPrice(e.target.value)} />
    //   <input name="discount" defaultValue={product.discount} type="number" onChange={e => setDiscount(e.target.value)} />
    //   <input name="discountEnds" defaultValue={product.discountEnds} type="date" onChange={e => setDiscountEnds(e.target.value)} />
    //   <button type="submit">
    //     Save
    //   </button>
    // </form>
    <ProductForm productIndex={productIndex} product={product} saveProduct={saveProduct} />
  )
}

export default EditProduct
