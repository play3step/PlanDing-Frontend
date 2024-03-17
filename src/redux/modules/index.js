import { combineReducers } from 'redux'
import calendar from './calendar'
import schedule from './schedule'

const rootReducer = combineReducers({
  calendar,
  schedule
})

export default rootReducer
