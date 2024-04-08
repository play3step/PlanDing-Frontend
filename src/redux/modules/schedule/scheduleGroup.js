const SET_GROUP = 'SET_GROUP'
const ADD_GROUP = 'ADD_GROUP'

export const setGroup = group => ({
  type: SET_GROUP,
  Payload: group
})

export const addGroup = title => ({
  type: ADD_GROUP,
  Payload: title
})

const initialState = {
  groups: []
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...state,
        groups: action.Payload
      }
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.Payload]
      }
    default:
      return state
  }
}

export default groupReducer
