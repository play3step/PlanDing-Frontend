import { createStore, combineReducers } from 'redux'
import calendarReducer from '../modules/calendar'
import scheduleReducer from '../modules/schedule'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer
})

const store = createStore(rootReducer)

export default store
