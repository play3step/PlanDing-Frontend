import styled from 'styled-components'
import CustomCalendar from './CustomCalendar'
import { useSelector, useDispatch } from 'react-redux'
import { setDate } from '../../redux/modules/calendar'
import UserProfile from './UserProfile'
import AddSchedule from './atom/AddSchedule'
import { addSchedule } from '../../redux/modules/schedule'
import { useState } from 'react'
import { ScheduleCreation } from '../../api/Schedule/ScheduleUpdate'

const SideMenu = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const userInfo = useSelector(state => state.users.user)

  const formatDate = date => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const [scheduleData, setScheduleData] = useState({
    title: '',
    content: '',
    startTime: '',
    endTime: '',
    date: formatDate(selectedDate)
  })
  const handleDateChange = newDate => {
    dispatch(setDate(newDate))
    setScheduleData(prevState => ({
      ...prevState,
      date: formatDate(newDate)
    }))
  }

  const handleSchedule = () => {
    if (
      scheduleData.title &&
      scheduleData.content &&
      scheduleData.startTime &&
      scheduleData.endTime
    ) {
      const formattedStartTime = `${String(scheduleData.startTime).padStart(2, '0')}:00`
      const formattedEndTime = `${String(scheduleData.endTime).padStart(2, '0')}:00`

      const updatedScheduleData = {
        ...scheduleData,
        startTime: formattedStartTime,
        endTime: formattedEndTime
      }
      ScheduleCreation(userInfo.token, updatedScheduleData)
      dispatch(addSchedule(updatedScheduleData))
      setScheduleData({
        title: '',
        content: '',
        startTime: '',
        endTime: ''
      })
    }
  }
  const ScheduleData = e => {
    const { name, value } = e.target
    setScheduleData(prevState => ({
      ...prevState,
      [name]: value
    }))
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
