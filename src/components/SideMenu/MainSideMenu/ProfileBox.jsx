import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LogoutBtn from './atom/LogoutBtn'

const ProfileBox = ({ profileHandler }) => {
  const userInfo = useSelector(state => state.users.user)

  return (
    <Container>
      <InfoBox onClick={profileHandler}>
        <ProfileImage
          src={userInfo.profileImage}
          alt="사용자 프로필"
        />
        <UserName>{userInfo.userName}</UserName>
        <UserCode>{userInfo.userCode ?? '#xxxx'}</UserCode>
        <LogoutBtn />
      </InfoBox>
    </Container>
  )
}
export default ProfileBox

const Container = styled.div`
  width: 16.666666666666664vw;
  height: 15vh;
  background-color: #fbfbfb;
  padding: 1.0416666666666665vw;
`
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 2.7083333333333335vw;
  height: 2.7083333333333335vw;
  border-radius: 50%;
`

const UserName = styled.p`
  font-size: 0.9375vw;
  margin-left: 0.4vw;
`
const UserCode = styled.p`
  font-size: 0.8333333333333334vw;
  margin-left: 0.2vw;
`
