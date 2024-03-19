import { combineReducers } from 'redux'
import calendar from './calendar'
import schedule from './schedule'
import users from './user'

const rootReducer = combineReducers({
  calendar,
  schedule,
  users
})

export default rootReducer
