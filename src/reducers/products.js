const defaultProducts = [
  {
    id: 0,
    prodData: {
      name: 'iPhone 11',
      descr: 'good phone',
      price: 1000,
      discount: 20,
      discountEnds: '2020-09-07'
    }
  },
  {
    id: 1,
    prodData: {
      name: 'Macbook pro 16',
      descr: 'good phone',
      price: 2500,
      discount: 45,
      discountEnds: '2020-10-18'
    }
  }
]

const products = (state = defaultProducts, action) => {
  switch (action.type) {
    case 'ADD_PROD':
      return [
        ...state,
        {
          id: action.id,
          prodData: action.prodData
        }
      ]
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
