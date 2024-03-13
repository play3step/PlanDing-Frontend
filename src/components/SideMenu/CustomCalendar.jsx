import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from '@emotion/styled'
import moment from 'moment'

const CustomCalendar = ({ value, onChange }) => {
  const formattedDate = moment(value).format('YYYY년 MM월 DD일')
  return (
    <>
      <DropdownButton>{formattedDate}</DropdownButton>
      <CalendarWrapper>
        <Calendar
          calendarType="US"
          onChange={onChange}
          value={value}></Calendar>
      </CalendarWrapper>
    </>
  )
}

export default CustomCalendar

const DropdownButton = styled.button`
  width: 8.427083333333334vw;
  height: 3.7962962962962963vh;
  border: none;
  border-radius: 15px;
  padding: 0px 12px;
  color: var(--festie-gray-800, #3a3a3a);
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: center;
  appearance: none;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
  margin-bottom: 1.9444444444444444vh;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`

const CalendarWrapper = styled.div`
  .react-calendar {
    width: 17.1875vw;
  }

  .react-calendar__tile {
    font-size: 0.7vw;
  }

  .react-calendar__navigation button {
    font-size: 1vw;
  }
  /* .react-calendar__tile--now {
    background: #9da2ff;
    color: white;
  } */
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`
