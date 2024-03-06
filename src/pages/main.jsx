import { useState } from 'react'
import CustomCalendar from '../components/CustomCalendar'

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = selectedDate => {
    console.log('Selected Date:', selectedDate)
    setSelectedDate(selectedDate)
  }

  return (
    <CustomCalendar
      value={selectedDate}
      onChange={handleDateChange}
    />
  )
}

export default Main
