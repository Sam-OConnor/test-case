const defaultProducts = [
  {
    id: 0,
    prodData: {
      name: 'iPhone 11',
      descr: 'good phone',
      price: 1000,
      discount: 200,
      discountEnds: 10
    }
  },
  {
    id: 1,
    prodData: {
      name: 'Macbook pro 16',
      descr: 'good phone',
      price: 2500,
      discount: 200,
      discountEnds: 10
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
