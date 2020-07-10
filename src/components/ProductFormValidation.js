const ProductFormValidation = formData => {
  const validation = {
    isValid: false,
    invalidInputNames: []
  }

  // if there is no image
  if (formData.image.length === 0)
    validation.invalidInputNames.push('image')

  // if image changed, so it has properties
  if (formData.imageInfo !== null) {
    // if image width is incorrect
    if (formData.imageInfo.imageWidth < 200 || formData.imageInfo.imageWidth > 4000)
    validation.invalidInputNames.push('image')

    // if image height is incorrect
    if (formData.imageInfo.imageHeight < 200 || formData.imageInfo.imageHeight > 4000)
    validation.invalidInputNames.push('image')

    // if image size is incorrect
    if (formData.imageInfo.imageSize > 4194304)
    validation.invalidInputNames.push('image')
  }

  // if product name in incorrect
  if (formData.name.length < 20 || formData.name.length > 60)
    validation.invalidInputNames.push('name')

  // if product description in incorrect
  if (formData.descr.length > 200 )
    validation.invalidInputNames.push('descr')

  // if product price in incorrect
  if (+formData.price < 1 || +formData.price > 99999999.99)
    validation.invalidInputNames.push('price')

  // if product have discount
  if (formData.isDiscount) {
    const currentDate = new Date().setUTCHours(0,0,0,0).valueOf()
    const discountEndsDate = new Date(formData.discountEnds).setUTCHours(0,0,0,0).valueOf()

    // if discount percentage is incorrect
    if (+formData.discount < 10 || +formData.discount > 90)
    validation.invalidInputNames.push('discount')

    // if discount expiry date is incorrect
    if (formData.discountEnds.length < 1 || currentDate >= discountEndsDate)
    validation.invalidInputNames.push('discountEnds')
  }

  if (validation.invalidInputNames.length === 0)
    validation.isValid = true

  return validation
}

export default ProductFormValidation
