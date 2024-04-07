const SET_DAILY_SCHEDULE = 'SET_DAILY_SCHEDULE'
const ADD_SCHEDULE = 'ADD_SCHEDULE'
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE'
const DELETE_SCHEDULE = 'DELETE_SCHEDULE'

export const setSchedule = schedule => ({
  type: SET_DAILY_SCHEDULE,
  payload: schedule
})

export const addSchedule = (startTime, endTime, title, contents) => ({
  type: ADD_SCHEDULE,
  payload: { startTime, endTime, title, contents }
})

export const updateSchedule = (id, startTime, endTime, title, contents) => ({
  type: UPDATE_SCHEDULE,
  payload: { id, startTime, endTime, title, contents }
})

export const deleteSchedule = id => ({
  type: DELETE_SCHEDULE,
  payload: { id }
})

const initialState = {
  schedules: []
}

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAILY_SCHEDULE:
      return {
        ...state,
        schedules: action.payload
      }
    case ADD_SCHEDULE:
      return {
        ...state,
        schedules: [...state.schedules, action.payload]
      }
    case UPDATE_SCHEDULE:
      return {
        ...state,
        schedules: state.schedules.map(schedule =>
          schedule.id === action.payload.id ? { ...action.payload } : schedule
        )
      }
    case DELETE_SCHEDULE:
      return {
        ...state,
        schedules: state.schedules.filter(
          schedule => schedule.id !== action.payload.id
        )
      }
    default:
      return state
  }
}

export default scheduleReducer
