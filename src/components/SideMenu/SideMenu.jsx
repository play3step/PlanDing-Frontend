import styled from 'styled-components'
import CustomCalendar from './CustomCalendar'
import { useSelector, useDispatch } from 'react-redux'
import { setDate } from '../../redux/modules/calendar'
import UserProfile from './UserProfile'
import AddSchedule from './atom/AddSchedule'
import { addSchedule } from '../../redux/modules/schedule'
import { useState } from 'react'

const SideMenu = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const userInfo = useSelector(state => state.users.user)

  const [scheduleData, setScheduleData] = useState({
    title: '',
    contents: '',
    startTime: '',
    endTime: ''
  })
  const handleDateChange = newDate => {
    dispatch(setDate(newDate))
  }
  const handleSchedule = newSchedule => {
    if (
      scheduleData.title &&
      scheduleData.contents &&
      scheduleData.startTime &&
      scheduleData.endTime
    ) {
      dispatch(addSchedule(newSchedule))
      setScheduleData({
        title: '',
        contents: '',
        startTime: '',
        endTime: ''
      })
    }
  }
  const ScheduleData = e => {
    const { name, value } = e.target
    setScheduleData({
      ...scheduleData,
      [name]: value
    })
  }

  return (
    <SideMenuContainer>
      <UserProfile userInfo={userInfo} />
      <CustomCalendar
        value={selectedDate}
        onChange={handleDateChange}
      />
      <AddSchedule
        addList={handleSchedule}
        onChange={ScheduleData}
        scheduleData={scheduleData}
      />
    </SideMenuContainer>
  )
}

export default SideMenu

const SideMenuContainer = styled.div`
  width: 21.302083333333332vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`
