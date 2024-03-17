import styled from 'styled-components'

const ScheduleList = ({ time }) => {
  return (
    <ListContainer>
      <ScheduleTime>{time}</ScheduleTime>
      <ListContentsContainer>
        <ListTitle>Title</ListTitle>
        <ListContents>Contents</ListContents>
      </ListContentsContainer>
    </ListContainer>
  )
}
export default ScheduleList

const ListContainer = styled.div`
  width: 38.333333333333336vw;
  min-height: 15.185185185185185vh;
  margin: auto;
  display: flex;
  margin-bottom: 1vw;
`
const ScheduleTime = styled.p`
  font-size: 1vw;
  color: #afadcd;
  margin-top: 0.5vw;
`
const ListContentsContainer = styled.div`
  width: 31.145833333333332vw;
  min-height: 15.185185185185185vh;
  border-radius: 15px;
  margin-left: 2.3958333333333335vw;
  background-color: #f6cc87;
  padding: 1.8518518518518516vh 2.083333333333333vw;
`
const ListTitle = styled.h1`
  font-size: 1vw;
  margin-bottom: 1vh;
`
const ListContents = styled.p`
  font-size: 1vw;
  width: 27.395833333333336vw;
  word-wrap: break-word;
`
