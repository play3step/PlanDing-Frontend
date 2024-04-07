import { useEffect } from 'react'

import ScheduleWeekly from '../components/SchedulePage/ScheduleWeekly'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { scheduleDaily } from '../api/Schedule/ScheduleUpdate'

const SchedulePage = () => {
  const dispatch = useDispatch()

  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const userInfo = useSelector(state => state.users.user)
  const scheduleData = useSelector(state => state.schedule.schedules)

  const formattedDate = moment(selectedDate).format('MMM D, YYYY')

  useEffect(() => {
    if (userInfo && selectedDate) {
      dispatch(
        scheduleDaily(userInfo.token, moment(selectedDate).format('YYYY-MM-DD'))
      )
    }
  }, [selectedDate, userInfo, dispatch])

  return (
    <>
      <ScheduleWeekly
        formattedDate={formattedDate}
        scheduleData={scheduleData}
      />
    </>
  )
}

export default SchedulePage
