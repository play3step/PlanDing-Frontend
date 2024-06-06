import styled from 'styled-components'
import DefaultProfile from '/icon/user.png'

const UserProfile = ({ userInfo }) => {
  const validUserInfo = userInfo || {}
  return (
    <Profilecontainer>
      {validUserInfo.profileImage ? (
        <ProfileImg
          src={userInfo.profileImage}
          alt="Profile Image"
        />
      ) : (
        <ProfileImg
          src={DefaultProfile}
          alt="Profile Image"
        />
      )}

      <UserName>{validUserInfo.userName ? userInfo.userName : 'User'}</UserName>
      <UserCode>
        {validUserInfo.userCode ? userInfo.userCode : '#####'}
      </UserCode>
    </Profilecontainer>
  )
}

export default UserProfile

const Profilecontainer = styled.div`
  width: 18.125vw;
  height: 6.62962962962963vh;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1.6666666666666667vh;
  border-bottom: 1px solid;
  margin-bottom: 3vw;
`

const ProfileImg = styled.img`
  width: 2.604166666666667vw;
  height: 4.62962962962963vh;
  border-radius: 50%;
`

const UserName = styled.p`
  font-size: 1.2vw;
  margin-left: 1vw;
`

const UserCode = styled.p`
  font-size: 0.6vw;
  margin-left: 0.2vw;
  margin-top: 0.3vw;
`
