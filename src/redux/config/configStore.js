import { createStore, combineReducers } from 'redux'
import calendarReducer from '../modules/calendar'

const rootReducer = combineReducers({
  calendar: calendarReducer
})

const store = createStore(rootReducer)

export default store
