const defaultProducts = [
  {
    id: 0,
    prodData: {
      name: 'iPhone 11',
      price: 1000
    }
  },
  {
    id: 1,
    prodData: {
      name: 'Macbook pro 16',
      price: 2500
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
    default:
      return state
  }
}

export default products
