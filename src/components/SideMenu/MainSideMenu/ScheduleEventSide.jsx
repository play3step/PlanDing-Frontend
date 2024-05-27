import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../../redux/modules/calendar'
import CustomCalendar from '../CustomCalendar'
import styled from 'styled-components'
import TodayEvent from './atom/TodayEvent'

const ScheduleEventSide = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const handleDateChange = newDate => {
    dispatch(setDate(newDate))
  }
  return (
    <Container>
      <CustomCalendar
        value={selectedDate}
        onChange={handleDateChange}
      />
      <TodayEvent />
    </Container>
  )
}
export default ScheduleEventSide

const Container = styled.div`
  width: 16.666666666666664vw;
  height: 79.44444444444444vh;
  background-color: #ffffff;
  display: flex;
  padding: 1.0416666666666665vw;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8518518518518516vh;
`
