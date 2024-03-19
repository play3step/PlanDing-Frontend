import { createStore, combineReducers } from 'redux'
import calendarReducer from '../modules/calendar'
import scheduleReducer from '../modules/schedule'
import userReducer from '../modules/user'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer,
  users: userReducer
})

const store = createStore(rootReducer)

export default store
