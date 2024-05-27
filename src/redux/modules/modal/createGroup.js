const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export const openCreateModal = data => ({
  type: OPEN_MODAL,
  payload: data
})

export const closeCreateModal = () => ({
  type: CLOSE_MODAL
})

const initialState = {
  isOpen: false
}

const createModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}

export default createModalReducer
