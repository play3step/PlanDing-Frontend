import styled from 'styled-components'
import EventList from './EventList'

const TodayEvent = () => {
  return (
    <Container>
      <ContainerTitle>Today Event</ContainerTitle>
      <ListContainer>
        <EventList />
        <EventList />
        <EventList />
      </ListContainer>
    </Container>
  )
}

export default TodayEvent

const Container = styled.div`
  width: 14.583333333333334vw;
  height: 32.592592592592595vh;
  border: 1px solid #5f64d9;
  border-radius: 4px;
  padding: 1.0416666666666665vw;
  margin-top: 2vw;
`
const ContainerTitle = styled.p`
  font-size: 1vw;
  color: #303494;
  font-weight: bold;
  margin-bottom: 2.4vh;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`
