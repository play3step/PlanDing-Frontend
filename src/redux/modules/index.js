import { combineReducers } from 'redux'
import calendar from './calendar'
import schedule from './schedule/scheduleUpdate'
import users from './user'
import groups from './schedule/scheduleList'

const rootReducer = combineReducers({
  calendar,
  schedule,
  users,
  groups
})

export default rootReducer
