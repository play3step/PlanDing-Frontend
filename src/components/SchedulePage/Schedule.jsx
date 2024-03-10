import styled from 'styled-components'

const Schedule = () => {
  return (
    <ScheduleContainer>
      <ScheduleHeader></ScheduleHeader>
    </ScheduleContainer>
  )
}

export default Schedule

const ScheduleContainer = styled.div`
  width: 42.916666666666664vw;
  height: 92.96296296296296vh;
  background-color: #f9f9fe;
  border-radius: 15px;
  margin: auto;
`

const ScheduleHeader = styled.div`
  width: 42.916666666666664vw;
  height: 8.425925925925926vh;
  background-color: #9094fe;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
