import { useEffect, useState } from 'react'
import ScheduleDaliy from '../components/SchedulePage/ScheduleDaliy'
import ScheduleSwitch from '../components/SchedulePage/atom/ScheduleSwitch'
import ScheduleWeekly from '../components/SchedulePage/ScheduleWeekly'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { scheduleDaily } from '../api/Schedule/ScheduleUpdate'

const SchedulePage = () => {
  const dispatch = useDispatch()

  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const userInfo = useSelector(state => state.users.user)
  const [isWeekly, setIsWeekly] = useState(false)

  const formattedDate = moment(selectedDate).format('MMM D, YYYY')

  useEffect(() => {
    if (userInfo && selectedDate) {
      dispatch(
        scheduleDaily(userInfo.token, moment(selectedDate).format('YYYY-MM-DD'))
      )
    }
  }, [selectedDate, userInfo, dispatch])

  const toogleSwitch = () => {
    setIsWeekly(prv => !prv)
  }
  return (
    <>
      <ScheduleSwitch
        isWeekly={isWeekly}
        toogleSwitch={toogleSwitch}
      />
      {isWeekly ? (
        <ScheduleWeekly formattedDate={formattedDate} />
      ) : (
        <ScheduleDaliy formattedDate={formattedDate} />
      )}
    </>
  )
}

export default SchedulePage
