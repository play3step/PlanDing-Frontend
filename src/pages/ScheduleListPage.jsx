import { useEffect } from 'react'
import ScheduleAdd from '../components/ScheduleListPage/ScheduleAdd'
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleList } from '../api/Schedule/ScheduleList'

const ScheduleListPage = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users.user)
  useEffect(() => {
    if (userInfo) {
      dispatch(setScheduleList(userInfo.token))
    }
  })
  return <ScheduleAdd />
}
export default ScheduleListPage
