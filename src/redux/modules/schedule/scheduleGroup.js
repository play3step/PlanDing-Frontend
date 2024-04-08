const SET_GROUP = 'SET_GROUP'
const ADD_GROUP = 'ADD_GROUP'

export const setGroup = group => ({
  type: SET_GROUP,
  payload: group
})

export const addGroup = title => ({
  type: ADD_GROUP,
  payload: title
})

const initialState = {
  groups: []
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...state,
        groups: action.payload
      }
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload]
      }
    default:
      return state
  }
}

export default groupReducer
