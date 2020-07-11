import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ProductFormValidation from './ProductFormValidation'

const getMinDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate() + 1).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const ProductForm = props => {
  const [redirect, setRedirect] = useState(false)
  const [image, setImage] = useState( (props.product && props.product.image) || '' )
  const [imageInfo, setImageInfo] = useState(null)
  const [name, setName] = useState( (props.product && props.product.name) || '' )
  const [descr, setDescr] = useState( (props.product && props.product.descr )|| '' )
  const [price, setPrice] = useState( (props.product && props.product.price) || '' )
  const [isDiscount, setIsDiscount] = useState( props.product && props.product.discount ? true : false )
  const [discount, setDiscount] = useState( (props.product && props.product.discount) || 0 )
  const [discountEnds, setDiscountEnds] = useState( (props.product && props.product.discountEnds) || '' )

  const setImageInfoToState = (reader, file) => {
    const img = new Image()

    img.onload = () => {
      setImage(reader.result)
      setImageInfo({
        imageWidth: img.width,
        imageHeight: img.height,
        imageSize: file.size
      })
    }

    img.src = reader.result
  }

  const onImageUpload = (elem) => {
    const reader  = new FileReader()

    reader.onloadend = () => {
      setImageInfoToState(reader, elem.files[0])
    }

    reader.readAsDataURL(elem.files[0])
  }

  const highlightWrongInputs = names => {
    for (const elem of document.getElementsByClassName('error')) {
      elem.classList.remove('error')
    }

    for (const value of names) {
      document.getElementsByName(value)[0].classList.add('error')
    }
  }

  const addProduct = prodData => {
    props.sendProduct(props.id, prodData, props.productIndex)
    setRedirect(true)
  }

  if (redirect)
    return <Redirect to="/"/>

  return (
    <form className="product-form" onSubmit={e => {
      e.preventDefault()

      const prodData = {
        image: image,
        imageInfo: imageInfo,
        isDiscount: isDiscount,
        name: name,
        descr: descr,
        price: price,
        discount: discount,
        discountEnds: discountEnds
      }

      const validation = ProductFormValidation(prodData)

      validation.invalidInputNames.length > 0 ? highlightWrongInputs(validation.invalidInputNames) : addProduct(prodData)
    }}>
      <label>
        *Image size must be less than 4mb and dimensions between 200px and 4000px
        <input
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg"
          onChange={e => {
            if (e.target.files[0])
              onImageUpload(e.target)
            else {
              setImage('')
              setImageInfo(null)
            }
          }} />
      </label>

      <label>
        *Name is required must be between 20 and 60 characters
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Product name"
          maxLength="60"
          onChange={e => setName(e.target.value)} />
      </label>

      <label>
        *Description must be between 20 and 60 characters
        <textarea
          name="descr"
          defaultValue={descr}
          placeholder="Product description"
          maxLength="200"
          onChange={e => setDescr(e.target.value)}></textarea>
      </label>

      <label>
        *Set the price between $1 and $99999999.99
        <input
          name="price"
          type="number"
          defaultValue={price}
          placeholder="Product price"
          step="0.01"
          onChange={e => {
            let value = +e.target.value

            if(value % 1 > 0)
              value = value.toFixed(2)

            setPrice(value)
          }} />
      </label>

      <label>
        *Set discount?
        <input
          name="isDiscount"
          type="checkbox"
          defaultChecked={isDiscount}
          onChange={e => {
            setIsDiscount(e.target.checked)
            if(!e.target.checked) {
              setDiscount(0)
              setDiscountEnds('')
            }

          }} />
      </label>

      {isDiscount &&
        <div className="discount-wrapper">
          <label>
            *Set the discount between 10% and 90%
            <input
              name="discount"
              type="range"
              defaultValue={discount}
              min="10"
              max="90"
              onChange={e => setDiscount(+e.target.value)} />
            {discount || 0 }%, final price is ${ (price - (price / 100 * discount)).toFixed(2) }
          </label>

          <label>
            *Set discount expiry date
            <input
              name="discountEnds"
              type="date"
              defaultValue={discountEnds}
              min={getMinDate()}
              onChange={e => setDiscountEnds(e.target.value)} />
          </label>
        </div>
      }

      <button type="submit">
        Save
      </button>
    </form>
  )
}

export default ProductForm
