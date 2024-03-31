import { createStore, combineReducers, applyMiddleware } from 'redux'
import calendarReducer from '../modules/calendar'
import scheduleReducer from '../modules/schedule'
import userReducer from '../modules/user'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer,
  users: userReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // redux-thunk 미들웨어를 적용합니다.
)
export default store
