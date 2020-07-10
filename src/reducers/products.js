const products = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return [
        ...action.prodData
      ]
    case 'ADD_PROD':
      return [
        ...state,
        {
          id: action.id,
          prodData: action.prodData
        }
      ].reverse()
    case 'EDIT_PROD':
      return state.map((item, index) => {
        if(index === action.index)
          return Object.assign({}, {
            id: item.id,
            prodData: action.prodData
          })
          return item
      })
    case 'DELETE_PROD':
      return state.filter((item, index) => item.id !== action.id)
    default:
      return state
  }
}

export default products
