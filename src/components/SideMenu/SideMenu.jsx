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

  const [scheduleData, setScheduleData] = useState({
    title: '',
    content: '',
    startTime: {
      hour: ''
    },
    endTime: {
      hour: ''
    }
  })
  const handleDateChange = newDate => {
    dispatch(setDate(newDate))
  }
  const handleSchedule = newSchedule => {
    if (
      scheduleData.title &&
      scheduleData.content &&
      scheduleData.startTime &&
      scheduleData.endTime
    ) {
      ScheduleCreation(userInfo.token, scheduleData)
      dispatch(addSchedule(newSchedule))
      setScheduleData({
        title: '',
        content: '',
        startTime: {
          hour: ''
        },
        endTime: {
          hour: ''
        }
      })
    }
  }
  const ScheduleData = e => {
    const { name, value } = e.target
    if (name === 'startTime' || name === 'endTime') {
      setScheduleData(prevState => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          hour: value
        }
      }))
    } else {
      setScheduleData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
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
