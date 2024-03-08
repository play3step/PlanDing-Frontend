import styled from 'styled-components'
import CustomCalendar from './CustomCalendar'
import { useState } from 'react'

const SideMenu = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = selectedDate => {
    setSelectedDate(selectedDate)
  }
  return (
    <SideMenuContainer>
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
