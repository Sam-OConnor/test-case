const defaultErrors = {
  isError: false,
  errorCode: '',
  errorMessage: ''
}

const errors = (state = defaultErrors, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return Object.assign({}, {
        isError: true,
        errorCode: action.errorCode,
        errorMessage: action.errorMessage
      })  
    case 'REMOVE_ERROR':
      return Object.assign({}, {
        isError: false,
        errorCode: '',
        errorMessage: ''
      })  
    default:
      return defaultErrors 
  }
}

export default errors