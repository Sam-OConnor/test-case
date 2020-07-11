const products = (state = {
  isLoading: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return Object.assign({}, {
        isLoading: false,
        items: [
          ...action.prodData
        ]
      })
    case 'ADD_PROD':
      return Object.assign({}, state, {
        isLoading: false,
        items: [
          ...state.items,
          {
            id: action.id,
            prodData: action.prodData
          }
        ].reverse()
      })
    case 'EDIT_PROD':
      return Object.assign({}, {
        isLoading: false,
        items: state.items.map((item, index) => {
          if (index === action.index)
            return {
              id: item.id,
              prodData: action.prodData
            }
          else
            return item
        })
      })
    case 'DELETE_PROD':
      return Object.assign({}, {
        isLoading: false,
        items: state.items.filter(item => item.id !== action.id)
      })
    default:
      return state
  }
}

export default products
