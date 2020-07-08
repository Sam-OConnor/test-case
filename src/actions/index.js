export const addProduct = (id, prodData) => ({
  type: 'ADD_PROD',
  id,
  prodData
})

export const editProduct = (index, prodData) => ({
  type: 'EDIT_PROD',
  index,
  prodData
})

export const deleteProduct = (id) => ({
  type: 'DELETE_PROD',
  id,
})
