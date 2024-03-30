import { useState } from 'react'
import ScheduleDaliy from '../components/SchedulePage/ScheduleDaliy'
import ScheduleSwitch from '../components/SchedulePage/atom/ScheduleSwitch'
import ScheduleWeekly from '../components/SchedulePage/ScheduleWeekly'

const SchedulePage = () => {
  const [isWeekly, setIsWeekly] = useState(false)
  const toogleSwitch = () => {
    setIsWeekly(prv => !prv)
  }
  console.log(isWeekly)
  return (
    <>
      <ScheduleSwitch
        isWeekly={isWeekly}
        toogleSwitch={toogleSwitch}
      />
      {isWeekly ? <ScheduleWeekly /> : <ScheduleDaliy />}
    </>
  )
}

export default SchedulePage
