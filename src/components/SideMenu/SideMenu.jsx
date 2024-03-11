import styled from 'styled-components'
import CustomCalendar from './CustomCalendar'
import { useSelector, useDispatch } from 'react-redux'
import { setDate } from '../../redux/modules/calendar'
import UserProfile from './UserProfile'

const SideMenu = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(state => state.calendar.selectedDate)

  const handleDateChange = newDate => {
    dispatch(setDate(newDate))
  }

  return (
    <SideMenuContainer>
      <UserProfile />
      <CustomCalendar
        value={selectedDate}
        onChange={handleDateChange}
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
