const defaultAuth = {
  isLoggedIn: false
}

const auth = (state = defaultAuth, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATUS':
      return {
        isLoggedIn: true
      }
    default:
      return state
  }
}

export default auth
