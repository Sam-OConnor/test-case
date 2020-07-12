const defaultAuth = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn'))
}

const auth = (state = defaultAuth, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATUS':
      return {
        isLoggedIn: action.isLoggedIn
      }
    default:
      return state
  }
}

export default auth
