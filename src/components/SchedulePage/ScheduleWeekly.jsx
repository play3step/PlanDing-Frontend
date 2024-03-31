import styled from 'styled-components'
import ScheduleList from './ScheduleList'

const MySchedule = [
  {
    time: '06:00 AM'
  },
  {
    time: '09:00 AM'
  },
  {
    time: '12:00 PM'
  },
  {
    time: '15:00 PM'
  },
  {
    time: '18:00 PM'
  },
  {
    time: '21:00 PM'
  },
  {
    time: '24:00 PM'
  }
]

const ScheduleWeekly = ({ formattedDate }) => {
  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <ScheduleDate>{formattedDate}</ScheduleDate>
      </ScheduleHeader>
      <ScheduleBody>
        {MySchedule.map((data, index) => (
          <ScheduleList
            time={data.time}
            title={data.title}
            contents={data.contents}
            key={index}
          />
        ))}
      </ScheduleBody>
    </ScheduleContainer>
  )
}

export default ScheduleWeekly

const ScheduleContainer = styled.div`
  width: 42.916666666666664vw;
  min-height: 92.96296296296296vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
`
const ScheduleDate = styled.div`
  width: 7.864583333333333vw;
  height: 3.3333333333333335vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9da2ff;
  border-radius: 20px;
  font-size: 0.9375vw;
  color: white;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`

const ScheduleBody = styled.div`
  width: 41.5625vw;
  min-height: 78.70370370370371vh;
  background-color: #ffffff;
  border-radius: 12px;
  margin: 1.29vh auto;
  padding: 2.9629629629629632vh 0;
`
