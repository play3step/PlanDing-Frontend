import styled from 'styled-components'
import ListContainer from '../components/MainPage/ListContainer'
import ScheduleEventSide from '../components/SideMenu/MainSideMenu/ScheduleEventSide'
import ScheduleGroupSide from '../components/SideMenu/MainSideMenu/ScheduleGroupSide'
import ProfileBox from '../components/SideMenu/MainSideMenu/ProfileBox'

const MainPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <LeftPostion>
        <ScheduleGroupSide />
      </LeftPostion>
      <MiddlePostion>
        <ListContainer />
      </MiddlePostion>
      <RightPostion>
        <ProfileBox />
        <ScheduleEventSide />
      </RightPostion>
    </div>
  )
}

export default MainPage

const LeftPostion = styled.div`
  margin-top: 20.555555555555554vh;
`

const MiddlePostion = styled.div`
  margin-top: 3.7037037037037033vh;
`

const RightPostion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.7037037037037033vh;
  margin-left: 1vw;
`
