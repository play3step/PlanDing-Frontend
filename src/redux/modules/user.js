const USER_DATA = 'USER_DATA'

export const userInfo = (userName, code, profileImage) => ({
  type: USER_DATA,
  payload: { userName, code, profileImage }
})

const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

export default userReducer
