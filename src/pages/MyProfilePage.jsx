import styled from 'styled-components'
import ScheduleEventSide from '../components/SideMenu/MainSideMenu/ScheduleEventSide'
import ScheduleGroupSide from '../components/SideMenu/MainSideMenu/ScheduleGroupSide'
import ProfileBox from '../components/SideMenu/MainSideMenu/ProfileBox'
import ProfileContainer from '../components/ProfilePage/ProfileContainer'

const MyProfilePage = () => {
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
        <ProfileContainer />
      </MiddlePostion>
      <RightPostion>
        <ProfileBox />
        <ScheduleEventSide />
      </RightPostion>
    </div>
  )
}
export default MyProfilePage
const LeftPostion = styled.div`
  margin-top: 3.7037037037037033vh;
`

const MiddlePostion = styled.div`
  margin-top: 3.7037037037037033vh;
  margin-left: 1vw;
`

const RightPostion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.7037037037037033vh;
  margin-left: 1vw;
`
