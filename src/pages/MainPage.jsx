import styled from 'styled-components'
import ListContainer from '../components/MainPage/ListContainer'
import ScheduleEventSide from '../components/SideMenu/MainSideMenu/ScheduleEventSide'
import ScheduleGroupSide from '../components/SideMenu/MainSideMenu/ScheduleGroupSide'
import ProfileBox from '../components/SideMenu/MainSideMenu/ProfileBox'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setGroupList } from '../api/Schedule/ScheduleGroup'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()
  const profileHandler = () => {
    navigate('/profile')
  }
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.users.user)
  const groupList = useSelector(state => state.groups.groups)
  console.log(userInfo)
  useEffect(() => {
    if (userInfo) {
      dispatch(setGroupList(userInfo.token))
    }
  }, [userInfo, dispatch])

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
        <ListContainer groupList={groupList} />
      </MiddlePostion>
      <RightPostion>
        <ProfileBox profileHandler={profileHandler} />
        <ScheduleEventSide />
      </RightPostion>
    </div>
  )
}

export default MainPage

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
