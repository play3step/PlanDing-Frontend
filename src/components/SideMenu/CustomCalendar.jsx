import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from '@emotion/styled'

const CustomCalendar = ({ value, onChange }) => {
  return (
    <>
      <CalendarWrapper>
        <Calendar
          calendarType="US"
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => date.getDate()}
        />
      </CalendarWrapper>
    </>
  )
}

export default CustomCalendar

const CalendarWrapper = styled.div`
  .react-calendar {
    width: 14.583333333333334vw;
    height: 25.925925925925924vh;
    border: 1px solid #5f64d9;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 1rem;
    font-family: 'Arial, sans-serif';
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .react-calendar__navigation button {
    color: #1d3557;
    background: none;
    border: none;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 0.2rem;
    cursor: pointer;
  }

  .react-calendar__navigation__label {
    font-size: 0.8rem;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    color: #1d3557;
    margin-bottom: 0.3rem;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.1rem 0;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 0.1rem;
    background: none;
    border: none;
    font-size: 0.7rem;
    color: #1d3557;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
  }

  .react-calendar__tile--now {
    background: #a8dadc;
    color: #1d3557;
    border-radius: 5px;
  }

  .react-calendar__tile--active {
    background: #457b9d;
    color: white;
    border-radius: 5px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1d3557;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #a8dadc;
  }

  .react-calendar__tile--weekend {
    color: #e63946;
  }

  .react-calendar__tile--neighboringMonth {
    color: #c0c0c0;
  }
`
